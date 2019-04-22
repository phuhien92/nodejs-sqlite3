import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Error from '../Error';
import Button from '../Button';
import { 
    Form,
    FormGroup, 
    FormLabel, 
    FormSubLabel
} from '../../helpers/form';
import TextInput from '../TextInput';
import Textarea from '../Textarea';
import { db } from '../../firebase';
import { fetchEventById } from '../../actions/event';
import EventColorList from './EventColorList';
import EventPublishSwitch from '../EventPublishSwitch';
import isEqual from 'lodash.isequal';
import AvailabilityForm from '../AvailabilityForm';
import EventTypes from '../EventTypes';
import RepetitionBoxes from '../RepetitionBox/RepetitionBoxes';
import Router from 'next/router';

const ButtonWrapper = styled.div`
    margin-top: 30px;
`;

const InlineGroup = styled.div`
    display: flex;
`;

const InputWrapper = styled.div`
    display: flex;
    margin-right: 15px;
`;

const FormContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin-bottom: 300px;
`;

const InlineLabel = styled.label`
    padding: 15px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
`;

const Reddot = styled.span`
    color: red;
`;

class EventForm extends Component {

    state = {
        isSubmitted: false
    }

    componentWillUpdate (nextProps) {
        let {
            event,
            setValues,
            action,
            availability
        } = this.props;

        if (!isEqual(event, nextProps.event)) {
            setValues({...nextProps.event})
        }
    }

    setEventPublishSwitch = () => {
        const {
            values,
            setFieldValue
        } = this.props;
        let published = values.published;
        setFieldValue("published", !published);
    }

    render() {
        const {
            values,
            setSubmitting,
            isSubmitting,
            availability,
            event,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            toggleAvaiSwitcher
        } = this.props;

        //console.info(availability)

        return (
        <FormContainer>
            <Form 
                id="et-form" 
                onSubmit={handleSubmit}
            >   
                
                <EventPublishSwitch 
                    size="large" 
                    setFieldValue={setFieldValue} 
                    published={values.published}
                    isSubmitting={isSubmitting}
                />
                <EventTypes
                    setFieldValue={setFieldValue}
                    value={values.event_type}
                    isSubmitting={isSubmitting}
                />
                <FormGroup>
                    <FormLabel>Event name <Reddot>*</Reddot></FormLabel>
                    <TextInput 
                        id="event_name"
                        type="text"
                        name="event_name"
                        value={values.event_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.event_name && touched.event_name ? 'text-input error':'text-input'}
                        disabled={isSubmitting}
                    />
                    {
                        touched.event_name &&
                        errors.event_name && 
                        <Error error={errors.event_name}/>
                    }
                </FormGroup>

                <FormGroup>
                    <FormLabel>Duration</FormLabel>
                    <InlineGroup>
                        <InputWrapper>
                            <TextInput 
                                name='event_duration_hours'
                                type='number'
                                min='0'
                                value={values.event_duration_hours}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={errors.event_duration_hours && touched.event_duration_hours ? 'text-input error':'text-input'}
                            />
                            <InlineLabel>Hours</InlineLabel>
                        </InputWrapper>
                        <InputWrapper>
                            <TextInput 
                                name='event_duration_minutes'
                                type='number'
                                min='0'
                                value={values.event_duration_minutes}
                                onChange={handleChange}
                                disabled={isSubmitting}
                                className={errors.event_duration_minutes && touched.event_duration_minutes ? 'text-input error':'text-input'}
                            />
                            <InlineLabel>Minutes</InlineLabel>
                        </InputWrapper>
                    </InlineGroup>
                    {
                        touched.event_duration_hours &&
                        errors.event_duration_hours &&
                        <Error error={errors.event_duration_hours}/>
                    }
                    {
                        touched.event_duration_minutes &&
                        errors.event_duration_minutes &&
                        <Error error={errors.event_duration_minutes}/>
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
                        placeholder='38 Church Street, Old office building etc'
                        disabled={isSubmitting}
                    />
                </FormGroup>
                
                <FormGroup>
                    <FormLabel>Description/Instructions</FormLabel>
                    <Textarea
                        name="event_description"
                        value={values.event_description}
                        onChange={handleChange}
                        placeholder='Use all your essay writing skills here'
                        disabled={isSubmitting}
                    />
                </FormGroup>

                <FormGroup>
                    <FormLabel>Event link <Reddot>*</Reddot></FormLabel>
                    <TextInput 
                        type="text"
                        name="event_link"
                        value={values.event_link}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        className={errors.event_link && touched.event_link ? 'text-input error':'text-input'}
                    />
                    {
                        touched.event_link &&
                        errors.event_link &&
                        <Error error={errors.event_link}/>
                    }
                    {
                        touched.event_link &&
                        errors.event_link &&
                        <Error error={"Format: event_link_name"}/>
                    }
                </FormGroup>

                <FormGroup>
                    <FormLabel>Event Color</FormLabel>
                    <EventColorList onChange={setFieldValue} selectedColor={values.event_color}></EventColorList>
                </FormGroup>

                <FormGroup>
                    <FormLabel>Availability</FormLabel>
                    <FormSubLabel>When do you want to schedule your event? Is is a single time event or a recurring event?</FormSubLabel>
                    <AvailabilityForm 
                        availability={availability}
                        setSubmitting={setSubmitting}
                        toggleAvaiSwitcher={toggleAvaiSwitcher}
                    />
                
                </FormGroup>
                
                <FormGroup>
                    <FormLabel>Repetition Occurs</FormLabel>
                    <FormSubLabel>How long will the event can be schedule in future?</FormSubLabel>
                    <RepetitionBoxes
                        repetition={values.repetition}
                        onChange={setFieldValue}
                        startDate={values.start_date}
                        endDate={values.end_date}
                    />
                </FormGroup>

                <ButtonWrapper>
                    <Button
                        icon={isSubmitting ? "loader":""}
                        size="large"
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </ButtonWrapper>
            </Form>
        </FormContainer>
        )
    }
};

const FormikForm = withFormik({
    mapPropsToValues: ({defaultEvent}) => ({...defaultEvent}),
    validationSchema: Yup.object().shape({
        event_name: Yup
                        .string()
                        .required('Please provide an event name.'),
        event_duration_hours:   Yup
                                    .number()
                                    .positive("Hour must be a positive number.")
                                    .min(0, "Hour must be an integer.")
                                    .max(12, "Duration can't be more than 12 hours."),
        event_duration_minutes: Yup
                                    .number()
                                    .positive("Minutes must be a positive number")
                                    .min(0,"Minutes must be an integer")
                                    .max(59, "Minutes can't be more than 59"),
        event_link: Yup
                        .string()
                        .required('Please provide an event link.')
                        .test({
                            name: 'no_white_space',
                            test: value => {                                
                                return value && value.indexOf(" ") > -1 ? false:true;
                            },
                            message:"Can't contain spaces"
                        })
                        .test({
                            name:'event_link',
                            message:"Event link can't contain special character.",
                            test: value => {
                                return value && value.match(/[!@#$%^&*(),.?":{}|<>]/g) ? false:true;
                            }
                        }),
        event_color: Yup
                        .string()
                        .required('Please pick your event color.')
    }),
    handleSubmit: (values, bag) => {    
        let {
            props: {action, auth, availability, router},
            setSubmitting
        } = bag;
        let {
            user: {uid}
        } = auth;

        setSubmitting(true);

        //console.log(availability)
        //return;

        if (action === "update") {
            let {id} = router.query;
            updateEvent(
                id, 
                values, 
                availability, 
                () => {
                    setSubmitting(false);
                }
            );
            
        } else if (action === "create") {
            createEvent(
                auth.user.uid, 
                values,
                {
                    ...availability,
                    uid: uid
                },
                () => {
                    setSubmitting(false);
                }
            );
        }
    }
})(EventForm);

const updateEvent = (id, values, availability, successCallback, errorCallback) => {
    /* update action */

    let avaiValues = {
        ...availability,
        uid: values.uid
    },
    avaiId = availability.id;

    let delayedPush = event => (
        new Promise( (resolve, reject) => {
            setTimeout(() => {
                db
                .ref(`/events/${id}`)
                .update(event)
                .then(resolve, reject);
            },1000)
        })
    )

    delayedPush({
        ...values
    })
    .then(() => (
        db
        .ref(`/availability/${avaiId}`)
        .update({...avaiValues})
        .then(() => {
            Router.push('/events')
        })
        .catch((error) => {
            console.error(error)
        })
    ))
    .catch(error => {
        console.error('Error writing availability to DB: ', error);
    })
}


const createEvent = (uid, values, availability, successCallback, errorCallback) => {
    let ref       = db.ref();
    let eventsRef = ref.child('events');
    let avaiRef   = ref.child('availability');
    let delayedPush = event => (
        new Promise( (resolve, reject) => {
            setTimeout(() => {
                eventsRef.push(event)
                    .then(resolve, reject);
            },500)
        })
    )
    
    delayedPush({
        ...values,
        uid: uid,
        createAt: (new Date()).getTime(),
        updateAt: (new Date()).getTime()
    })
    .then(() => (
        eventsRef.orderByKey().on('child_added', snap => {
            let key = snap.key;
            let refAvaiId = avaiRef.orderByChild('id').equalTo(key);
            
            refAvaiId.once('value', snapshot => {
                if (!snapshot.hasChildren()) {
                    snapshot.ref.push({
                        ...availability,
                        eventId: key
                    }).then(() => {
                        Router.push('/events');
                    })
                }

                Router.push('/events');
            });
        })
    ))
    .catch(error => {
        console.error('Error writing new event to DB: ', error);
    })
}

const mapStateToProps = ({ 
    auth, 
    loading,
    event
}) => ({ 
    auth, 
    loading,
    defaultEvent: {...event},
});
  
const mapDispatchToProps = dispatch => ({
    fetchEvent: (id) => dispatch(fetchEventById(id))
});

const WhatEventForm = connect(mapStateToProps, mapDispatchToProps)(FormikForm)

export default WhatEventForm;
