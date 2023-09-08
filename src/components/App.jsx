import { Component } from 'react';
import contacts from '../data/contacts.json';
import { Container } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { FilterByName } from './Filter/FilterByName';
import { ContactForm } from './ContactForrm/ContactForm';

export class App extends Component {
  state = {
    contactList: contacts,
    filter: '',
    name: '',
    number: '',
  };

  //console.log('clientList', this.state.contactList);

  handlerFilterChange = evt => {
    console.log('evt.currentTarget.value', evt.currentTarget.value)
    this.setState({filter : evt.currentTarget.value})
  }

  getFilteredContats=()=>{
    const filter =this.state.filter.toLowerCase()
    //console.log('filter', filter)
    const filteredContats = this.state.contactList.filter(contact => contact.name.toLowerCase().includes(filter));
    //console.log('filteredContats', filteredContats)
    return filteredContats;
  }


  deleteContact = id => {
    this.setState(prevState => ({
      contactList: prevState.contactList.filter(contact => contact.id !== id),
    }));
  };

  render() {
    //console.log('clientList', this.state.contactList);
    // return <Container>React homework template</Container>;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <FilterByName value={this.state.filter} onChange={this.handlerFilterChange}/>
        {/* <div>ContactList</div> */}
        <ContactList
          // contacts={this.state.contactList}
          contacts={this.getFilteredContats()}
          onDeleteContact={this.deleteContact}
        ></ContactList>
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
