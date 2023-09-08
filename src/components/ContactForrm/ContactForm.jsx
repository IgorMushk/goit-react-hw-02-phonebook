const { Component } = require("react");

export class ContactForm extends Component {
state = {
    name: '',
    number: '',
}
    
render() {
    return ( 
    <>
        <form >
        <label >
            Name
        <input type="text" name="name" />
        </label>
        <label for="lname">
            Number
        <input type="tel" name="number" />
        </label>
        <button type="submit">Add Contact</button>
      </form>   
    </>)
}

}