import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import BodyWrapper from './../components/BodyWrapper';
import NeedToLogin from './../components/NeedToLogin';
import * as types from './../actions/actionTypes';
import Header from "../components/Header";

class HomePage extends Component {
    
    static async getInitialProps(props) {
        //console.log(props)
    }

    componentDidMount () {
        
    }
    
    shouldComponentUpdate(nextProps) {
        return this.props.isAuthenticated !== nextProps.isAuthenticated;
    }

    render() {
        const { isAuthenticated } = this.props;
        const needToLogin = !isAuthenticated && <NeedToLogin/>

        return (
            <BodyWrapper>
                <h1>This is index page</h1>
            </BodyWrapper>
        )
    }
}

HomePage.propsTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);