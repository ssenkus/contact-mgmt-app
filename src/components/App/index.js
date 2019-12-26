import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AddContact from '../Contacts/AddContact';
import ContactsTable from '../Contacts/ContactsTable';


function App() {
    return (
        <div>
            <div className="row"  style={{ marginTop: '10px'}}>
                <h1>Contact App</h1>
            </div>
            <div className="row" style={{ marginTop: '10px'}}>
                <AddContact/>
            </div>
            <div className="row" style={{ marginTop: '10px'}}>
                <ContactsTable/>
            </div>
        </div>
    );
}

export default App;
