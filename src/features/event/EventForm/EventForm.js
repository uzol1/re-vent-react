import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Segment } from 'semantic-ui-react'
import { createEvent, updateEvent } from '../../../store/actions'
const event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
}
const EventForm = (props) => {


    const [formState, setFormState] = useState(event)

    useEffect(() => {
        if (props.event) {
            setFormState({ ...props.event })
        }
        // unmounts when path changes from createEvent to manageEvent and resets the state
        // return () => {
        //     console.log("unmounted")
        //     setFormState(event)
        // }
    }, [props.event])


    const submitHandler = (e) => {
        e.preventDefault();

        if (formState.id) {
            props.eventUpdateHandler(formState)
            props.history.push('/events/')
        } else {
            props.newEvent(formState);
            props.history.push('/events/')
        }
    }

    const changeHandler = ({ target: { name, value } }) => {

        setFormState({ ...formState, [name]: value })
    }

    return (
        <Segment>
            <Form onSubmit={submitHandler}>
                <Form.Field>
                    <label>Event Title</label>
                    <input name="title" placeholder="First Name" value={formState.title} onChange={changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Event Date</label>
                    <input name="date" type="date" placeholder="Event Date" value={formState.date} onChange={changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name="city" placeholder="City event is taking place" value={formState.city} onChange={changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input name="venue" placeholder="Enter the Venue of the event" value={formState.venue} onChange={changeHandler} />
                </Form.Field>
                <Form.Field>
                    <label>Hosted By</label>
                    <input name="hostedBy" placeholder="Enter the name of person hosting" value={formState.hostedBy} onChange={changeHandler} />
                </Form.Field>
                <Button positive type="submit" >
                    Submit
                </Button>
                <Button type="button" onClick={() => props.history.goBack()}>Cancel</Button>
            </Form>
        </Segment>
    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    if (id && state.length > 0) {
        return { event: state.filter((event) => event.id === props.match.params.id)[0] }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newEvent: (event) => (dispatch(createEvent(event))),
        eventUpdateHandler: (event) => (dispatch(updateEvent(event)))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);


