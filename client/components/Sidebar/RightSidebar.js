import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import NavLink from '../NavLink';

const PageTitle = styled.h1`
    > a {
        height: 75px;
        line-height: 75px;
        z-index: 3;
        font-size: 26px;
        color: #F6F6FA;
        font-weight: lighter;
        letter-spacing: 1px;
        text-decoration: none;
    }
`;

const List = styled.div`
    left: 75px;
    width: 250px;
    background-image: linear-gradient(to bottom,#1e2635,#283346);
    background-color: #102a5a;
    padding-left: 0;
    margin: 0;
    list-style: none;
    padding-left: 45px;
`;

const RightSidebar = (props) => {
    
    let view = null, 
    {
        router
    } = props;

    if (router.asPath.indexOf('/events') > -1) {
        view = (
            <List>
                <PageTitle>
                    <NavLink route="events">Event</NavLink>
                </PageTitle>
                <NavLink route="eventCreate">
                    <Button>Create Event</Button>
                </NavLink>
            </List>
        )
    } else {
        view = (
            <List></List>
        )
    }

    return (
        <React.Fragment>
            {view}
        </React.Fragment>
    )
}


export default RightSidebar;