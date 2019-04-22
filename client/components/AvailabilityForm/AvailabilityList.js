import React from 'react';
import AvailabilityItem from './AvailabilityItem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
    hideModal,
    showModal
} from '../../actions';

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

    openModal = (e,index) => {
        e.preventDefault();        
        //console.log(this.props.showModal)
        this.props.showModal(
            this.props.availability.slots[index],
            'availability'
        );
        
    }

    closeModal = () => {
        this.props.setSubmitting(false);
        //this.setState({showModal: false})
        this.props.hideModal()
        return false;
    }

    render (){    
        let view, {
            availability,
            toggleAvaiSwitcher
        } = this.props,
        {
            showModal
        } = this.state;
        
        if (availability && availability.slots) {
            view = availability.slots.map((slot, index) => (
                <AvailabilityItem 
                    key={index}
                    slot={slot}
                    active={slot.on}
                    index={index}
                    openModal={this.openModal}
                    toggleAvaiSwitcher={toggleAvaiSwitcher}
                />
            ))
        }

        return (
            <React.Fragment>
                <List>
                    {view}
                </List>             
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => dispatch(hideModal()),
        showModal: (modalProps, modalType) => {
            dispatch(showModal({modalProps, modalType}))
        }
    }
}

export default connect(null,mapDispatchToProps)(AvaiList);