import { Component } from 'react';
import contacts from '../data/contacts.json';
import { Container } from './App.styled';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contactList: contacts,
    filter: '',
    name: '',
    number: '',
  };

  //console.log('clientList', this.state.clientList);

  render() {
    console.log('clientList', this.state.contactList);
    // return <Container>React homework template</Container>;
    return (
      <Container>
        <h1>Phonebook</h1>
        <div>ContactForm</div>
        <h2>Contacts</h2>
        <div>Filter</div>
        <div>ContactList</div>
        <ContactList contacts={this.state.contactList}></ContactList>
      </Container>
    );
  }
}

//<div>
//  <h1>Phonebook</h1>
//  <ContactForm ... />
//
//  <h2>Contacts</h2>
//  <Filter ... />
//  <ContactList ... />
//</div>
