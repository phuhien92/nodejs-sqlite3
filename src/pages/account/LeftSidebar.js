import React from 'react';
import { Link } from 'react-router-dom';

export default class LeftSidebar extends React.Component {

    render () {
        return (
        <div className="mdl-tabs__tab-bar">
        {this.props.navigation.map( (tab,i) => 
            <a href={tab.href} key={i} data-tab={tab.link} className={tab.status}>{tab.name}</a>
        )}
        </div>
        )
    }
} 