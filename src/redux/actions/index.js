import {ADD_CONTACT, DELETE_CONTACT} from '../constants/action-types';

export function addContact(payload) {
    return {type: ADD_CONTACT, payload};
}

export function deleteContact(payload) {
    return {type: DELETE_CONTACT, payload}
}