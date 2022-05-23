import {Component} from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }
  
  handleAddContact=(newContact)=>this.setState(({contacts})=>({
    contacts:[...contacts, newContact]
  }));
  
  handleCheckUniqueContact=(name)=>{
    const{contacts} = this.state;
    const isExistContact=!!contacts.find(contact=>contact.name===name);
    isExistContact&&alert(`${name} is already registered`);
    return !isExistContact;
  }
  
  handleRemoveContact=(id)=>this.setState(({contacts})=>({contacts:contacts.filter(contact=>contact.id!==id)}))

  render(){
    const{contacts} = this.state;
    return(
        <>
          <h1>Phonebook</h1>
          <ContactForm onAdd={this.handleAddContact}
                      onCheckUnique={this.handleCheckUniqueContact} />
          <h2>Contacts</h2>
          {/* <Filter/>*/}
          <ContactList contacts={contacts}
                       onRemove={this.handleRemoveContact}/> 
        </>
    );   
};   
};
 