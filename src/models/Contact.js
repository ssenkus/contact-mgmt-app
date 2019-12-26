import uuidv4 from 'uuid/v4';


class Contact {
    constructor(data) {
        this.id = uuidv4();
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.isSelected = false;
    }
}

export default Contact;