import React, { Component } from 'react'
import styled from 'styled-components';

const NavTopWrapper = styled.div`
    width: 100%;
    height: 80px;
    padding-left: 20px;
    line-height: 80px;
    background: #fff;
    border-bottom: 1px solid #E7E7EC;
`;

class NavTop extends Component {
    render () {
        return (
            <NavTopWrapper>
                TOP NAV
            </NavTopWrapper>
        )
    }
}

export default NavTop