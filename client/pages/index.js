import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import BodyWrapper from './../components/BodyWrapper';
import NeedToLogin from './../components/NeedToLogin';
import * as types from './../actions/actionTypes';

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
                {needToLogin}
                <div>Prop from Redux {this.props.foo}</div>
                <div>Prop from getInitialProps {this.props.custom}</div>
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