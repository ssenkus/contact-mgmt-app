import React, {Component} from 'react';

class ContactsTableRowEmpty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td colSpan="6"><h3 style={{ textAlign: 'center'}}>No contacts</h3></td>
            </tr>
        );
    }
}

export default ContactsTableRowEmpty;