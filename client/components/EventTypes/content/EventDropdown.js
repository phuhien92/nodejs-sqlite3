import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';
import Router from 'next/router';

const DropdownWrapper = styled.div`
    position: relative;
    float: right;
    margin-left: 10px;
`;

const SettingsButton = styled.div`
    position: relative;
    color: #aeaeae;
    :hover {
        color: #666a73;
    }
    .fa-cog {
        margin-right: 2px;
    }
`;

const DropdownList = styled.ul`
    position: absolute;
    display: none;
    min-width: 170px;
    border: 1px solid #666a73;
    background: #fff;
    list-style: none;
    padding-left: 0;
    margin-top: 3px;
    &.open {
        display: block;
    }
`;

const List = styled.li`
    border-bottom: 1px solid #dadada;
    text-align: left;
    padding: 10px 20px 10px 14px;
    color: #383838;
    white-space: nowrap;
    font-size: 14px;
`;

export default class EventDropdown extends React.PureComponent {

    go = (path) => {
        Router.push(path);
    }

    deleteEvent = () => {
        console.info(`Delete event ${this.props.id}`)
    }

    render() {
        let {
            toggled,
            toggleDropdown,
            id
        } = this.props

        this.setState({
            open: toggled
        })

        return (
        <DropdownWrapper>
            <SettingsButton onClick={toggleDropdown}>
                <FontAwesomeIcon icon="cog"/>
                <FontAwesomeIcon icon="angle-down"/>
            </SettingsButton>
            <DropdownList className={toggled && 'open'}>
                <List onClick={this.go.bind(this,`/event_types/edit/${id}`)}>
                    <FontAwesomeIcon icon="pen"/> Edit
                </List>
                <List onClick={this.deleteEvent}><FontAwesomeIcon icon="trash"/> Delete</List>
            </DropdownList>
        </DropdownWrapper>
        )
    }
}
