import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Router from 'next/router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import cookie from 'js-cookie';
import axios from 'axios';
import { fadeIn } from '../../helpers/animations';

const Wrapper = styled.div`
  poistion: relative;
  width: 600px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 80px;
  animation: ${fadeIn} 0.8s ease;

  > * {
    max-width: 100%;
  }

  hr {
    width: 100%;
    height: 1px;
    outline: none;
    border: none;
    background-color: #e3e3e3;
    margin: 24px 0;

    @media only screen and (max-width: 768px) {
      margin: 12px 0;
    }
  }
  h3 {
    font-size: 24px;
    margin: 32px 0 16px;

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  p {
    margin: 24px 0;
  }
  a {
    margin: 32px 0 0;
    color: #2196f3;
    text-decoration: none;

    :hover {
      color: #2196f3;
      border-bottom: 1px dotted #2196f3;
    }
  }
`;

class EventTypes extends Component {
    render () {
        return (
            <Wrapper>
                Event Types s
            </Wrapper>
        )
    }
}

EventTypes.propTypes = {
    auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired
    }).isRequired,
}

EventTypes.defaultProps = {

}

const mapStateToProps = ({
    auth
}) => ({
    auth
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(EventTypes)