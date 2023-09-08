import { Button, Form, Inpute, Label } from './ContactForm.Styled';

const { Component } = require('react');

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  heandlerChange = evt => {
    const { name, value } = evt.currentTarget;
    //console.dir(evt.currentTarget);
    this.setState({ [name]: value });
    //console.log('name', name)
    //console.log('value', value)
  };

  render() {
    const {name, number} = this.state;
    return (
      <>
        <Form>
          <Label>
            Name
            <Inpute
              type="text"
              name="name"
              //pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.heandlerChange}
            />
          </Label>
          <Label>
            Number
            <Inpute
              type="tel"
              name="number"
              //pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.heandlerChange}
            />
          </Label>
          <Button type="submit">Add Contact</Button>
        </Form>
      </>
    );
  }
}

// handlerSubmit = evt => {
//     evt.preventDefault();
//     const {name, number} = this.state;

// };
