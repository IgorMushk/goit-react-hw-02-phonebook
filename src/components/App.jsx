import { Component } from 'react';
import contacts from '../data/contacts.json';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contactList: contacts,
  };

  //console.log('clientList', this.state.clientList);

  render() {
    console.log('clientList', this.state.contactList);
    // return <Container>React homework template</Container>;
    return <Container>
      <h1>Phonebook</h1>
      <div>Form</div>
      <h2>Contacts</h2>
      <div>Contact list</div>
    </Container>;
  }
}
