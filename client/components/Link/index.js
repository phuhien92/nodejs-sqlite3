import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showPageLoading } from '../../actions';

const Link = (props) => {
    const goTo = () => {
        let path = props.path;
        
        if (!path || window.location.pathname === path) return;
        props.showPageLoading();
        Router.push(path);

        return false;
    };

    return (
        <a onClick={goTo}>
            {props.children}
        </a>
    );
};

Link.propTypes = {
    showPageLoading: PropTypes.func,
    path: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
    showPageLoading: () => dispatch(showPageLoading())
});
  
export default connect(null, mapDispatchToProps)(Link);