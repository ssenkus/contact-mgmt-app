import axios from 'axios';

class ContactsRepository {
    getAllContacts() {
        return axios.get('http://localhost:4000/api/v1/contacts');
    }
}

export default new ContactsRepository();