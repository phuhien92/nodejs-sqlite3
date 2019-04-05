import React from 'react';
import AvailabilityItem from './AvailabilityItem';
import styled from 'styled-components';
import AvaiModal from './AvaiModal';

const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 700px;
    position: relative;
`;

class AvaiList extends React.Component {

    state = {
        showModal: false
    }

    openModal = () => {
        this.props.setSubmitting(false);
        this.setState({ showModal: true }, () => {
            console.log(this.state.showModal)
        })
        return false;
    }

    closeModal = () => {
        this.props.setSubmitting(false);
        this.setState({showModal: false})
        return false;
    }

    render (){    
        let view, {
            availability,
            toggleAvaiSwitcher
        } = this.props,
        modal = this.state.showModal ? (
            <AvaiModal closeModal={this.closeModal}/>
        ) : null;
        
        if (availability && availability.slots) {
            view = availability.slots.map((slot, index) => (
                <AvailabilityItem 
                    key={index}
                    slot={slot}
                    on={slot.on}
                    index={index}
                    openModal={this.openModal}
                    toggleAvaiSwitcher={toggleAvaiSwitcher}
                />
            ))
        }

        return (
            <div>
                <List>
                    {view}
                </List>
                
                {modal}
                
            </div>
        )
    }
}

export default AvaiList;