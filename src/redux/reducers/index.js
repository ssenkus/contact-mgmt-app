import Contact from '../../models/Contact.js';
import {
    GET_CONTACTS_BEGIN,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    ADD_CONTACT, 
    DELETE_CONTACT
} from '../constants/action-types';

const initialState = {
    contacts: [],
    loading: false
};

function rootReducer(state = initialState, action) {
    console.log('action', action);
    switch (action.type) {
        case GET_CONTACTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
              };
        case GET_CONTACTS_SUCCESS: 
            return {
                ...state,
                loading: false,
                contacts: action.payload.contacts
            };
        case GET_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                contacts: []
              };
        case ADD_CONTACT:
            const contact = new Contact(action.payload);
            return Object.assign({}, state, {
                contacts: [...state.contacts, contact]
            });
        case DELETE_CONTACT:
            const contactToDelete = action.payload;
            let contactsWithoutItem = state.contacts.filter(contact => contact.id !== contactToDelete.id);
            return Object.assign({}, state, {
                contacts: contactsWithoutItem
            });
        default:
            console.log('Could not handle action', action);
            return state;
    }
}

export default rootReducer;