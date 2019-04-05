import React from 'react';
import styled from 'styled-components';
import {Router} from '../../../server/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '../../../server/routes';

const SidebarWrapper = styled.div`
    text-align: left;
    cursor: pointer;
    color: #fff;
    font-size: 15px;

    &.active {
        color: #fff;
    }
`;

const IconWrapper = styled.span`
    font-size: 16px;
    margin: auto;
    text-align: left;
    margin-right: 15px;
    width: 20px;
    display: inline-block;
`;

const NavLink = styled.a`
    padding: 8px 24px;
    color: #fff;
    display: block;
    text-decoration: none;

    &:hover {
        background-color: rgba(255,255,255,.08);
    }
`;

const LeftSidebar = props => {
    const goTo = e => {
        e.preventDefault();
        const path = e.currentTarget.getAttribute('href');
        if (!path || window.location.pathname === path) return;
        props.showPageLoading();
        Router.push(path);
    }

    return (
    <SidebarWrapper>
        <NavLink href="/dashboard" onClick={goTo}>
            <IconWrapper><FontAwesomeIcon className='fa-icon' icon="tachometer-alt"/></IconWrapper>
            <span>Dashboard</span>
        </NavLink>
        <NavLink href="/events" onClick={goTo}>
            <IconWrapper><FontAwesomeIcon className='fa-icon' icon="calendar"/></IconWrapper>
            <span>Events</span>
        </NavLink>
    </SidebarWrapper>
)
}

export default LeftSidebar;