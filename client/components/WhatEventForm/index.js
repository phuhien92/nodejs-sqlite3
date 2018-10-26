import React, { Component } from 'react';
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
import { db } from '../../firebase';
import Router from 'next/router';
import Toggle from 'react-toggled'
import { fadeIn } from '../../helpers/animations';
import { fetchEventById } from '../../actions/event';
import EventColorList from './EventColorList';

const ButtonWrapper = styled.div`
    > button {
        margin-right: 1rem;
    }
`;

const Form = styled.form`
    position: relative;
    flex-basis: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    animation: ${fadeIn} 0.8s ease-out;
    width: 100%;
    margin-top: 20px;
    input {
        margin-bottom: 48px;
    }
    @media only screen and (max-width: 768px) {
        input {
        margin-bottom: 32px;
        }
    }
`;

class ETInnerForm extends Component {

    componentDidMount () {
        if (this.props.type === "create") {
            this.props.setValues({
                ...this.props.event
            })
        }  
        if (this.props.type === "update") {
            let {
                query
            } = this.props;

            this.props.fetchEvent(query.id).then(event => {
                this.props.setValues({
                    ...event
                })
            })
        }
    }

    setEventColor = (color) => {
        this.setState({
            event_color: color
        }, () => {
            
        })
        
        return false;
    }

    render() {
        const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            setFieldTouched,
        } = this.props;

        return (
            <Toggle on={true}>
                {({on, getTogglerProps, setOn}) => (
                <ExpandableBlock >
                    <ExpandableHeader {...getTogglerProps()}>
                        <ExpandableTitle>What event is this?</ExpandableTitle>
                        <ExpandableSubtitle>{values && values.event_name}</ExpandableSubtitle>
                        {!on && 
                            <ExpandButtonLink>
                                Edit
                            </ExpandButtonLink>
                        }
                    </ExpandableHeader>
                    {on && 
                    <ExpandableContent>
                        <Form 
                            id="et-form" 
                            onSubmit={handleSubmit}

                        >   
                            <FormGroup>
                                <FormLabel>Event name *</FormLabel>
                                <TextInput 
                                    id="event_name"
                                    type="text"
                                    name="event_name"
                                    value={values.event_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.event_name && touched.event_name ? 'text-input error':'text-input'}
                                    autoFocus
                                />
                                {
                                    errors.event_name &&
                                    touched.event_name && <Error error={errors.event_name} type="event_name"/>
                                }
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Location</FormLabel>
                                <TextInput 
                                    id="event_location"
                                    type="text"
                                    name="event_location"
                                    value={values.event_location}
                                    onChange={handleChange}
                                    className={errors.event_location && touched.event_location ? 'text-input error':'text-input'}
                                />
                                {
                                    errors.event_location &&
                                    touched.event_location && <Error error={errors.event_location} type="event_location"/>
                                }
                            </FormGroup>
                            
                            <FormGroup>
                                <FormLabel>Description/Instructions</FormLabel>
                                <Textarea
                                    name="event_description"
                                    value={values.event_description}
                                    onChange={handleChange}
                                    className={errors.event_description && touched.event_description ? 'text-input error':'text-input'}
                                />
                                {
                                    errors.event_description &&
                                    touched.event_description && <Error error={errors.event_description} type="event_description"/>
                                }
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Event link *</FormLabel>
                                <TextInput 
                                    type="text"
                                    name="event_link"
                                    value={values.event_link}
                                    onChange={handleChange}
                                    className={errors.event_link && touched.event_link ? 'text-input error':'text-input'}
                                />
                                {
                                    errors.event_link &&
                                    touched.event_link && <Error error={errors.event_link} type="event_link"/>
                                }
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Event Color</FormLabel>
                                <EventColorList onChange={setFieldValue} selectedColor={values.event_color}></EventColorList>
                            </FormGroup>
                                
                            <ButtonWrapper>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </ButtonWrapper>

                        </Form>
                    </ExpandableContent>}
                </ExpandableBlock>
                )}
            </Toggle>
        )
    }
};

const ETForm = withFormik({
    mapPropsToValues: () => ({
        event_name: '',
        event_color: {},
        event_location: '',
        event_description: '',
        event_link: ''
    }),
    validationSchema: Yup.object().shape({
        event_name: Yup.string().required('Please provide an event name.'),
        event_link: Yup.string().required('Please provide an event link.'),
        event_color: Yup.string().required('Please pick your event color.')
    }),
    handleSubmit: (values, {props: { auth, query: {id}, type }, setSubmitting, setErrors}) => {        
        if (type === "update") {
            updateEvent(id, values);
        } else if (type === "create") {
            createEvent(auth, values);
        }
    }
})(ETInnerForm);

ETInnerForm.propTypes = {

};

const updateEvent = (id, values) => {
    /* update action */
    db.ref(`/events/${id}`).update({
        ...values
    }).catch((error) => {
        console.error(error)
    })
}

const createEvent = (auth, values) => {
    let uid = auth.user.uid;
    let ref       = db.ref();
    let eventsRef = ref.child('events');

    let delayedPush = event => (
        new Promise( (resolve, reject) => {
            setTimeout(() => {
                eventsRef.push(event)
                    .then(resolve, reject);
            },1)
        })
    )
    
    delayedPush({
        ...values,
        uid: uid,
        step: 1,
        timestamp: (new Date()).getTime()
    })
    .then(() => (
        eventsRef.orderByKey().on('child_added', snap => {
            let key = snap.key;
            Router.push(`/event_types/single?id=${key}`,`/event_types/${key}`)
        })
    ))
    .catch(error => {
        console.error('Error writing new event to DB: ', error);
    })
}

const mapStateToProps = ({ 
    auth, 
    loading,
    event,
}) => ({ 
    auth, 
    loading,
    event
});
  
const mapDispatchToProps = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEventById(id))
});

const WhatEventForm = connect(mapStateToProps, mapDispatchToProps)(ETForm)

export default WhatEventForm;
