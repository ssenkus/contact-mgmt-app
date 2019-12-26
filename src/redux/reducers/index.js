import Contact from '../../models/Contact.js';
import {ADD_CONTACT, DELETE_CONTACT} from '../constants/action-types';

const initialState = {
    contacts: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
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
            return state;
    }
}

export default rootReducer;