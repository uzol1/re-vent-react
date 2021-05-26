import React from 'react'
import { EventListItem } from './EventListItem'

const EventList = (props) => {
    return (
        <React.Fragment>
            { props.events.map(event => {
                return <EventListItem key={event.id} event={event} eventViewHandler={props.eventViewHandler} deleteEventHandler={props.deleteEventHandler} />
            })}


        </React.Fragment>
    )
}

export default EventList
