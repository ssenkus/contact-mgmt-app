import Contact from '../../models/Contact.js';
import {
    GET_CONTACTS_BEGIN,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_FAILURE,
    ADD_CONTACT_BEGIN,
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAILURE,
    DELETE_CONTACT
} from '../constants/action-types';

const initialState = {
    contacts: [],
    loading: false
};

function rootReducer(state = initialState, action) {
    console.log('rootReducer: action', action);

    switch (action.type) {
        // GET CONTACTS
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

        // ADD CONTACT
        case ADD_CONTACT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ADD_CONTACT_SUCCESS:
            let createdContact = action.payload.contact;
            return {
                ...state,
                loading: false,
                contacts: [...state.contacts, createdContact]
            }
        case ADD_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case DELETE_CONTACT:
            const contactToDelete = action.payload;
            let contactsWithoutItem = state.contacts.filter(contact => contact.id !== contactToDelete.id);
            return Object.assign({}, state, {
                contacts: contactsWithoutItem
            });
        default:
            console.log('Unhandled action', action);
            return state;
    }
}

export default rootReducer;