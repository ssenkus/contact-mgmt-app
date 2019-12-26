import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactsTableRow from './ContactsTableRow.js';
import ContactsTableRowEmpty from './ContactsTableRowEmpty.js';


function getContactsTableRows(contacts) {
    return contacts.map(contact => <ContactsTableRow key={contact.id} contact={contact}/>);
}

class ContactsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: props.contacts
        };
    }

    componentDidMount() {

    }

    render() {
        const contactRows = this.props.contacts.length === 0 ?
            <ContactsTableRowEmpty/> : getContactsTableRows(this.props.contacts);

        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contactRows}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    const {contacts} = state;
    return {contacts};
};

export default connect(mapStateToProps)(ContactsTable);