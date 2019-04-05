import React, { PureComponent } from 'react'
import styled, {css} from 'styled-components';
import Router from 'next/router';
import PublicSwitch from './PublishSwitch';
import EventDropdown from './EventDropdown';
import Link from 'next/link'
import Button from './../Button';

const Block = styled.div`
    vertical-align: middle;
    padding: 11px 11px 7px;
    font-size: 14px;
    line-height: 14px;
    background-color: #fff;
    transition: border-color .2s ease;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid #dadada;
    border-radius: 3px;
    max-width: 32.33%;
    width: 100%;
    margin: 5px 0.5%;
    cursor: pointer;

    :hover {
        border-color: #00a2ff;
    }
`;

const BlockInner = styled.div`
    padding-left: 23px;
    position: relative;
`;

const EventName = styled.span`
    color: #4D5055;
    word-wrap: break-word;
    word-break: break-word;
    max-width: 80%;
    line-height: 16px;
    font-size: 14px;
`;

const Marker = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #d9d9d9;
    border-radius: 50%;
    border: 1px solid #bbb;

    ${({ color }) =>
    color &&
    css`
      background: ${color};
    `}
`;

class Event extends PureComponent {
    switchRef   = React.createRef();
    dropdownRef = React.createRef();
    componentDidMount () {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount () {
        document.addEventListener('click', this.handleClickOutside)
    }
    
    handleClickOutside = (e) => {
        if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
            this.props.toggleDropdown('');
        }   
    }

    go = (e) => {
        let target = e.target;

        if (
            !this.switchRef.contains(target) &&
            !this.dropdownRef.contains(target)
        ) {
            Router.push(`/events/edit/${this.props.id}`);
        }
    }

    toggleDropdown = () => {
        this.props.toggleDropdown(this.props.id)
    }

    render () {
        let {
            event_color,
            event_name,
            id,
            published
        } = this.props,
        toggled = this.props.toggleEvent === id;
        
        return (
            <Block>
                <BlockInner>
                    { published ? <Marker color={event_color.value}/> : <Marker/>}
                    <span ref={node => this.dropdownRef = node}>
                        <EventDropdown id={id} toggleDropdown={this.toggleDropdown} toggled={toggled}/>
                    </span>
                    <span ref={node => this.switchRef = node}>
                        <PublicSwitch id={id} published={published}/>
                    </span>
                    <EventName>{event_name}</EventName>

                    <Button>
                        <Link as={`/e/${id}/edit`} href={`/e/edit?id=${id}`}>View Detail</Link>    
                    </Button>    
                </BlockInner>
            </Block>
        )
    }
}

export default Event