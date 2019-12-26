import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addContact} from '../../redux/actions';

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit() {
        this.props.addContact(this.state);

        this.setState({
            firstName: '',
            lastName: ''
        });
    }

    render() {
        return (
            <div>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>Add Contact</button>
            </div>
        );
    }
}

export default connect(
    null,
    {addContact}
)(AddContact);