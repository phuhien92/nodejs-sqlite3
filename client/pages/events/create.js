import React from 'react'
import BodyWrapper from '../../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { AuthWrapper } from '../../helpers/grid';
import WhatEventForm from '../../components/WhatEventForm';
import { fetchEventById } from '../../actions/event';
import {withRouter} from 'next/router'
import isEqual from 'lodash.isequal';

class CreateEventPage extends React.Component {
    state = {
        availability: {}
    }

    componentWillUpdate(nextProps) {

        if (!isEqual(this.state.availability, nextProps.availability)) {
            this.setState({
                availability: nextProps.availability
            }, () => {
                console.log(this.state.availability)
            })
        }

    }

    toggleAvaiSwitcher = (e) => {
        let switcherNode = e.currentTarget;
        let index        = switcherNode.getAttribute('data-index');
        let avai         = {...this.state.availability};
        let slots        = [...avai.slots];
        
        slots[index]['on'] = !slots[index]['on'];
        this.setState({
            availability: {
                ...avai,
                slots: slots
            }
        }, () => {
            //console.log(this.state.availability)
        })
    }

    render() {

        let {
            event
        } = this.props;

        return (
            <BodyWrapper template='admin'>
                <AuthWrapper>
                    <h1>Create Event</h1>
                    <WhatEventForm 
                        event={event}
                        availability={this.state.availability}
                        action="create" 
                        toggleAvaiSwitcher={this.toggleAvaiSwitcher}
                        {...this.props}
                    />
                </AuthWrapper>
            </BodyWrapper>
        )
    }
}

CreateEventPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({
    auth: {isAuthenticated},
    availability,
    event
}) => ({
    isAuthenticated,
    availability,
    event
})

export default connect(mapStateToProps, null)(CreateEventPage);