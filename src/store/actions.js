import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./Type"

export const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        value: event
    }
}
export const updateEvent = (event) => {

    return {
        type: UPDATE_EVENT,
        value: event
    }
}
export const deleteEvent = (id) => {
    return {
        type: DELETE_EVENT,
        value: id
    }
}
