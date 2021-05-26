
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./Type";

const initialState =
    [
        {
            id: '1',
            title: 'Trip to Tower of London',
            date: '2018-03-27',
            category: 'culture',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
            city: 'London, UK',
            venue: "Tower of London, St Katharine's & Wapping, London",
            hostedBy: 'Bob',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            attendees: [
                {
                    id: 'a',
                    name: 'Bob',
                    photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
                },
                {
                    id: 'b',
                    name: 'Tom',
                    photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
                }
            ]
        },
        {
            id: '2',
            title: 'Trip to Punch and Judy Pub',
            date: '2018-03-28',
            category: 'drinks',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
            city: 'London, UK',
            venue: 'Punch & Judy, Henrietta Street, London, UK',
            hostedBy: 'Tom',
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            attendees: [
                {
                    id: 'b',
                    name: 'Tom',
                    photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
                },
                {
                    id: 'a',
                    name: 'Bob',
                    photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
                }
            ]
        }
    ]

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_EVENT:
            return [...state, action.value]

        case UPDATE_EVENT:
            const updatedEvent = state.map((event) => {
                if (event.id === action.value.id) {
                    return action.value
                }
                else return event
            })
            return [...updatedEvent]

        case DELETE_EVENT:
            const newEvents = state.filter((event) => (event.id !== action.value))
            return [...newEvents]

        default:
            return state;
    }
    // return state
}

export default Reducer