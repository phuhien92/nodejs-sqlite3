import React, { Component } from 'react'
import AvaiList from './AvailabilityList';

const AvailabilityForm = (props) => {

    let {
        availability
    } = props;

    return (
        <React.Fragment>
            <AvaiList {...props}/>
        </React.Fragment>
    )
}



export default AvailabilityForm