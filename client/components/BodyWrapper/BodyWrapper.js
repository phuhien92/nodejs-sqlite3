import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import cookie from 'js-cookie';
import PageLoading from '../PageLoading';
import { hidePageLoading } from '../../actions';


const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    * {
        box-sizing: border-box;
    }

    *::-moz-focus-inner {
        border: none;
    }

    @media only screen and (max-width: 448px) {
        font-size: 14px;
    }
`;

const ContentWrapper = styled.div`
    min-height: 100vh;
    width: 100%;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;

class BodyWrapper extends React.Component {
    componentDidMount () {
        
    }
    
    render() {
        const { children, pageLoading } = this.props;
        const content = pageLoading ? <PageLoading/> : children;

        return (
            <Wrapper>
                <ContentWrapper>
                    {content}
                </ContentWrapper>
            </Wrapper>
        )
    }
}

BodyWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hidePageLoading: PropTypes.func.isRequired,
    pageLoading: PropTypes.bool.isRequired,
    norenew: PropTypes.bool
}

BodyWrapper.defaultProps = {
    norenew: false 
}

const mapStateToProps = ({loading: { page: pageLoading}}) => ({pageLoading});

const mapDispatchToProps = dispatch => ({
    hidePageLoading: () => dispatch(hidePageLoading())
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyWrapper);
