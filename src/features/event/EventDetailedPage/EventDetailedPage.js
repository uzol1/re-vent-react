import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'
import { connect } from 'react-redux'

const EventDetailedPage = ({ event }) => {

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>

    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    if (id && state.length > 0) {
        return { event: state.filter((event) => event.id === props.match.params.id)[0] }
    }
}

export default connect(mapStateToProps)(EventDetailedPage);