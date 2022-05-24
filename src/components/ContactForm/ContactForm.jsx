import { nanoid } from 'nanoid';
import {Component} from 'react';
import css from './ContactForm.module.css';
// import {nanoid} from 'nanoid';

const INITIAL_STATE = {
    name: '',
    number: '',
    id:''
}

class ContactForm extends Component {
 state= INITIAL_STATE

nameInputId = nanoid();
phoneInputId = nanoid();

handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    
};

handleSubmit = event => {
    event.preventDefault();
   
   this.props.onSubmit(this.state);

    this.setState({ name: '',number:''});

}


render() {
    const { name, number } = this.state;
        return(
            <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}> Name
            <input 
                   className={css.input}
                   type="text"
                   name='name'
                   value={name}
                   onChange={this.handleChange}
                   id={this.nameInputId}
                   placeholder="Enter name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required>
                   </input>
                   </label>
            <label className={css.label}>Number
            <input className={css.input}
                    type="text"
                    name='number'
                    value={number}
                    onChange={this.handleChange}
                    id={this.phoneInputId}
                   placeholder="Enter phone number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required>
                   </input>
                   </label>
            <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
        
    } 
} 

export default ContactForm;