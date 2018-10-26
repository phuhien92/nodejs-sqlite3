import React from 'react'
import BodyWrapper from '../../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const EventPage = ({ isAuthenticated }) => (
    <BodyWrapper>
      hello
    </BodyWrapper>
);

EventPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
    isAuthenticated
})

export default connect(mapStateToProps, null)(EventPage)