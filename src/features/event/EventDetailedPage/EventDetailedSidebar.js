import React from 'react'
import { Item, Label, List, Segment } from 'semantic-ui-react'

const EventDetailedSidebar = ({ attendees }) => {
    const isHost = false;
    return (
        <React.Fragment>
            <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                {attendees && attendees.length} {attendees && attendees.length === 1 ? 'person' : 'people'} going
      </Segment>
            <Segment attached>
                <List relaxed divided>
                    {attendees && attendees.map(attendee => (
                        <Item key={attendee.id} style={{ position: 'relative' }}>
                            {isHost &&
                                <Label
                                    style={{ position: 'absolute' }}
                                    color="orange"
                                    ribbon="right" >
                                    Host
                              </Label>
                            }
                            <Item.Image size="tiny" src={attendee.photoURL} />
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    {attendee.name}
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}

                </List>
            </Segment>
        </React.Fragment>
    )
}

export default EventDetailedSidebar
