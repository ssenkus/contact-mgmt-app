const uuidv1 = require('uuid/v1');

class Contact {

    constructor(data) {
        this._id = uuidv1();
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.emailAddress = data.emailAddress;
    }

}

module.exports = Contact;