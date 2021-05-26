import React, { useState } from 'react'
import { Button, Grid } from 'semantic-ui-react';


import EventList from '../EventList/EventList';
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../../../store/actions';

const EventDashboard = ({ event, createEvent, updateEvent, deleteEvent }) => {


    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={event} deleteEventHandler={deleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
        </Grid>
    )
}
const mapStateToProps = (state) => {
    return { event: state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createEvent: (event) => (dispatch(createEvent(event))),
        updateEvent: (event) => (dispatch(updateEvent(event))),
        deleteEvent: (id) => (dispatch(deleteEvent(id)))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventDashboard);