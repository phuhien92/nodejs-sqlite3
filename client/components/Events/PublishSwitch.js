import React, { Component } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { publishEvent } from './../../actions';

const Switch = styled.label`
    float: right;
    position: relative;
    top: -5px;
    margin-left: 10px;
    padding: 5px 0;
    cursor: pointer;
    transition: transform .2s ease-in-out, opacity .2s ease-in-out, z-index 0s, -webkit-transform .2s ease-in-out;
    user-select: none;
`;

const Slider = styled.div`
    width: 25px;
    height: 11px;
    position: relative;
    top: 1px;
    display: inline-block;
    cursor: pointer;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    background-color: #f6f6f6;
    transition: all .2s ease-in-out;

    &.checked {
        background-color: #caeec7;
        border-color: #87c97a;
        :before {
            left: 12px;
        }
    }

    :hover {
        border-color: #ccc;
    }

    :before {
        content: "";
        position: absolute;
        top: -2px;
        left: -2px;
        height: 11px;
        width: 11px;
        border: 1px solid #a8a8a8;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.15) 0 1px 2px;
        transition: all .2s ease-in-out;
        backface-visibility: hidden;
    }
`;

class PublicSwitch extends Component {

    state = {
        published: false
    }

    componentDidMount () {
        this.setState({
            published: this.props.published
        })
    }

    publishEvent = () => {
        let {
            id, published
        } = this.props;

        this.props.publishEvent(id,published);
        this.setState({
            published: !published
        })
    }

    render () {
        
        return (
            <Switch name="publish">
                <Slider onClick={this.publishEvent} className={this.state.published && 'checked'}></Slider>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = dispatch => ({
    publishEvent: (id, published) => dispatch(publishEvent(id,published))
}) 

export default connect(mapStateToProps,mapDispatchToProps)(PublicSwitch)