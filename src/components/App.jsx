import { Component } from 'react';
import contacts from '../data/contacts.json';
import { Container } from './App.styled';
import { ContactList } from './ContactList/ContactList';

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
      <div>Contact Form</div>
      <h2>Contacts</h2>
      <div>Contact List</div>
      <ContactList contacts={this.state.contactList}></ContactList>
    </Container>;
  }
}
