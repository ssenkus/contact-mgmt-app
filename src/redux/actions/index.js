import {
    ADD_CONTACT, 
    DELETE_CONTACT, 
    GET_CONTACTS_BEGIN, 
    GET_CONTACTS_SUCCESS, 
    GET_CONTACTS_FAILURE
} from '../constants/action-types.js';


export function addContact(payload) {
    return { type: ADD_CONTACT, payload };
}

export function deleteContact(payload) {
    return { type: DELETE_CONTACT, payload }
}

export const getContactsBegin = () => ({
    type: GET_CONTACTS_BEGIN
});

export const getContactsSuccess = contacts => ({
    type: GET_CONTACTS_SUCCESS,
    payload: { contacts }
});

export const getContactsFailure = error => ({
    type: GET_CONTACTS_FAILURE,
    payload: { error }
});

export function getContacts() {
    console.log('getContacts action');
    return dispatch => {
        dispatch(getContactsBegin());
        return fetch("http://localhost:4000/api/v1/contacts")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getContactsSuccess(json.contacts));
                return json.contacts;
            })
            .catch(error => dispatch(getContactsFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}