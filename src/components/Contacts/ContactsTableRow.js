import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';


class ContactsTableRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: props.contact
        };

        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleCheckboxSelect = this.handleCheckboxSelect.bind(this);
        this.handleClickRow = this.handleClickRow.bind(this);
        this.handleStopPropagation = this.handleStopPropagation.bind(this);
    }

    handleCheckboxSelect(e) {
        e.stopPropagation();
        let { contact } = this.state;
        contact.isSelected = !contact.isSelected;

        this.setState({
            contact
        });
    }

    handleClickDelete(e) {
        e.preventDefault();
        this.handleStopPropagation(e);
        const { contact } = this.state;
        this.props.deleteContact(contact);
    }

    handleClickRow(e) {
        e.stopPropagation();
        console.log('clicked row for contact', this.state.contact);
    }

    handleStopPropagation(e) {
        e.stopPropagation();
    }

    render() {
        const { _id, firstName, lastName, emailAddress, isSelected } = this.state.contact;

        return (
            <tr onClick={this.handleClickRow}>
                <td><input type="checkbox" checked={isSelected} onClick={this.handleStopPropagation}
                    onChange={this.handleCheckboxSelect} /></td>
                <td>{_id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailAddress}</td>
                <td>
                    <button onClick={this.handleClickDelete}>Delete</button>
                </td>
            </tr>
        );
    }
}

export default connect(null, { deleteContact })(ContactsTableRow);