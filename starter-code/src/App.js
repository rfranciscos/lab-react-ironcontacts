import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactList: contacts.slice(0, 5),
      fullList: contacts
    };

  }

  addContact() {
    let newContacts = [...this.state.contactList];
    let fullList = [...this.state.fullList];
  let newContact = fullList[Math.floor(Math.random() * fullList.length)];
if(newContacts.includes(newContact)) {
  this.addContact()
} else {

  newContacts.push(newContact)
}
  this.setState({
      contactList: newContacts
  })
}

sortName() {
  let newContacts = [...this.state.contactList];
}

sortPopularity() {
  let newContacts = [...this.state.contactList];
}

  render() {
    return (
      <div>
        <button onClick={this.addContact.bind(this)}>Add</button>
        <button onClick={this.addContact.bind(this)}>Sort by name</button>
        <button onClick={this.addContact.bind(this)}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>popularity</th>
          </tr>
          {this.state.contactList.map((contact, index) => {
            return <Table key={index} contact={contact} />;
          })}
        </table>
      </div>
    );
  }
}

export default App;
