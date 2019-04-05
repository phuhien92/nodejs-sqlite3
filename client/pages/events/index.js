import React from 'react'
import BodyWrapper from '../../components/BodyWrapper';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Events from '../../components/Events';

class EventTypesPage extends React.Component {
    
    render() {

        let {
            isAuthenticated
        } = this.props;

        return (
            <BodyWrapper template='admin'>
              {isAuthenticated ? <Events/> : null}
            </BodyWrapper>
        )
    }
}

EventTypesPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = ({auth: {isAuthenticated}}) => ({
    isAuthenticated
})

export default connect(mapStateToProps, null)(EventTypesPage)