import React from 'react'
import BodyWrapper from '../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import EventTypes from '../components/EventTypes';

const EventTypesPage = ({ isAuthenticated }) => (
    <BodyWrapper>
      {isAuthenticated ? <EventTypes/> : null}
    </BodyWrapper>
);

EventTypesPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
    isAuthenticated
})

export default connect(mapStateToProps, null)(EventTypesPage)