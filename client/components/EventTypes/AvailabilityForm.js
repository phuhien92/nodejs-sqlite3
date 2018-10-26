import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik } from 'formik';
import Yup from 'yup';
import Error from '../Error';
import Button from '../Button';
import { 
    FormGroup, 
    FormLabel, 
    ExpandableBlock, 
    ExpandableHeader, 
    ExpandableSubtitle, 
    ExpandableTitle, 
    ExpandableContent,
    ExpandButtonLink
} from '../../helpers/form';
import TextInput from '../TextInput';
import Textarea from '../Textarea';
import ETBox from './ETBox';
import { db } from '../../firebase';
import Router from 'next/router';
import Toggle from 'react-toggled'

const ButtonWrapper = styled.div`
    > button {
        margin-right: 1rem;
    }
`;

class ETInnerForm extends Component {
    render () {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched,
            setFieldValue,
            event: {
                color_options
            },
            edit_event: {
                step
            }
        } = this.props;

        return (
            <Toggle>
                {({on, getTogglerProps}) => (
                    <ExpandableBlock>
                        <ExpandableHeader {...getTogglerProps()}>
                            <ExpandableTitle>When can people book this event?</ExpandableTitle>
                            <ExpandableSubtitle>sutitle here</ExpandableSubtitle>
                            {!on && 
                            <ExpandButtonLink>Edit</ExpandButtonLink>
                            }
                        </ExpandableHeader>
                        {on && 
                        <ExpandableContent>
                            <ETBox 
                            id="et-form" 
                            onSubmit={handleSubmit}>   
                            <FormGroup>
                                <FormLabel>Event Duration *</FormLabel>
                                
                            </FormGroup>
                               
                            <FormGroup>
                                <FormLabel>Date Range</FormLabel>
                                
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Event Time Zone</FormLabel>
                                
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Availability</FormLabel>
                                
                            </FormGroup>
                                
                            <ButtonWrapper>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </ButtonWrapper>

                        </ETBox>
                    </ExpandableContent>}
                </ExpandableBlock>
                )}
            </Toggle>
        )
    }
}

const ETForm = withFormik({
    mapPropsToValues: ({
        event: {
            event_duration,
            date_range,
            event_time_zone,
            availability,
            secret_event
        }
    }) => ({
        event_duration,
        date_range,
        event_time_zone,
        availability,
        secret_event
    }),
    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (values, {props: { auth }, setSubmitting, setErrors}) => {

    }
})(ETInnerForm)

const mapStateToProps = ({ 
    auth, 
    loading,
    event,
    edit_event
}) => ({ 
    auth, 
    loading,
    event,
    edit_event 
});
  
const mapDispatchToProps = dispatch => ({
    showPageLoading: () => dispatch(showPageLoading()),
});

const AvailabilityForm = connect(mapStateToProps, mapDispatchToProps)(ETForm);

export default AvailabilityForm