import React, { Component } from 'react'
import styled, {css} from 'styled-components';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { withRouter } from 'next/router';
import { DARK_BLUE } from '../../theme';

const SiteLogo = styled.button`
    font-size: 26px;
    text-transform: none;
    letter-spacing: .25px;
    min-width: 60px;
    background: transparent;
    color: #fff;
    line-height: 46px;
    border: none;
    border-bottom: 1px solid #bbb;
    text-align: left;
    margin-bottom: 20px;
    img {
        width: 28px;
        margin-left: 15px;
    }
`;

const SidebarWrapper = styled.nav`
    display: flex;
    width: 256px;
    transition: width .3s cubic-bezier(0.4,0.0,0.2,1);
    position: relative;
    z-index: 12;
    flex-direction: column;
    align-items: stretch;

    ${({ theme }) => {
            if (theme === "dark") {
                return css`
                    border-right: 1px solid ${DARK_BLUE};
                    background-color: ${DARK_BLUE};            
                `;
            }

            return null;
        }
    }
`;

const Sidebar = (props) => {
    return (
        <SidebarWrapper theme={"dark"}>
            <SiteLogo>
                <img src="//www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" role="presentation"/>&nbsp;
                <span>Bookme</span>
            </SiteLogo>
            <LeftSidebar {...props}/>
            {/* <RightSidebar {...props}/> */}
        </SidebarWrapper>
    )

}

export default withRouter(Sidebar)