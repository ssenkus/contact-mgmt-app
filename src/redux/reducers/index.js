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
                error: null
            };
        case ADD_CONTACT_SUCCESS:
            let createdContact = action.payload.contact;
            return {
                ...state,
                contacts: [...state.contacts, createdContact]
            }
        case ADD_CONTACT_FAILURE:
            return {
                ...state,
                error: action.payload.error
            };
        case DELETE_CONTACT:
            console.log('DELETE CONTACT action', action);
            let stateContacts = state.contacts.slice();
            let index = stateContacts.indexOf(action.payload);
            
            let updatedContacts = stateContacts.filter((contact) => contact._id !== action.payload._id);
            console.log('INDEX', index);
            return {
                ...state,
                contacts: [...updatedContacts]
            }
        default:
            console.log('Unhandled action', action);
            return state;
    }
}

export default rootReducer;