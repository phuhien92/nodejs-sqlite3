import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import initialState from '../store';
import BodyWrapper from '../components/BodyWrapper';

class Homepage extends Component {
    render() {
        return (
            <BodyWrapper>
                hello nextapp.js app
            </BodyWrapper>
        )
    }
}
Homepage.propTypes = {

}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => ({
  
});

//export default Homepage;

export default withRedux(initialState, mapStateToProps, mapDispatchToProps)(Homepage);