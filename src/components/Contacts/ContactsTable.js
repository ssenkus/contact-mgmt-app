import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactsTableRow from './ContactsTableRow.js';
import ContactsTableRowEmpty from './ContactsTableRowEmpty.js';
import { getContacts } from '../../redux/actions/index.js'

function getContactsTableRows(contacts) {
    return contacts.map(contact => <ContactsTableRow key={contact._id} contact={contact}/>);
}

class ContactsTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: props.contacts
        };
    }

    componentDidMount() {
        this.props.dispatch(getContacts());
    }

    render() {
        const { error, loading, contacts } = this.props;

        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading...</div>;
        }

        console.log('this.props', this.props);
        const contactRows = contacts.length === 0 ?
            <ContactsTableRowEmpty/> : getContactsTableRows(contacts);

        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Address</th>
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
    return {
        contacts,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps)(ContactsTable);