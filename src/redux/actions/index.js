import {
    DELETE_CONTACT,
    GET_CONTACTS_BEGIN,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    ADD_CONTACT_BEGIN,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILURE
} from '../constants/action-types.js';

export function deleteContact(payload) {
    return dispatch => {
        // return { type: DELETE_CONTACT, payload }
        return fetch('http://localhost:4000/api/v1/contacts/' + payload._id, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch({type: DELETE_CONTACT, payload});
                return { success: true };
            })
            .catch(error => console.error('DEL ERR', error));
    }
};

/* ADD CONTACTS */
export const addContactBegin = () => ({
    type: ADD_CONTACT_BEGIN
});

export const addContactSuccess = (contact) => ({
    type: ADD_CONTACT_SUCCESS,
    payload: {
        contact
    }
});

export const addContactFailure = (error) => ({
    type: ADD_CONTACT_FAILURE,
    payload: { error }
});

export function addContact(payload) {
    return dispatch => {
        dispatch(addContactBegin())
        return fetch('http://localhost:4000/api/v1/contacts', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(addContactSuccess(json.contact));
                return json.contacts;
            })
            .catch(error => dispatch(addContactFailure(error)));
    };
};

/* GET CONTACTS */
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