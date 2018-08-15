import React, {Component} from 'react';
import EventForm from './../../components/common/EventForm';
import LeftSidebar from './LeftSidebar';
import ProfileTab from './ProfileTab';
import PictureTab from './PictureTab';

class Account extends Component {

    render() {
        let navigation = [
            { href: '#profile', name: 'Profile', link: '/admin/account/profile', status: 'mdl-tabs__tab is-active' },
            { href: '#picture', name: 'Picture', link: '/admin/account/picture', status: 'mdl-tabs__tab' }
        ]
        return (
        <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
            <LeftSidebar navigation={navigation}/>
            <div className="mdl-tabs__panel is-active" id="profile">
                <ProfileTab/>
            </div>
            <div className="mdl-tabs__panel" id="picture">
                <PictureTab/>
            </div>
        </div>
        )
    }
}

export default { component: Account }