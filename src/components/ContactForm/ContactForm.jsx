import {Component} from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import {nanoid} from 'nanoid';

const INITIAL_STATE = {
    name:'',
    number: '',
}

class ContactForm extends Component {
 state= INITIAL_STATE
 static propTypes = {
     onAdd: PropTypes.func.isRequired,
     name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
 }

 handleChangeForm=({target})=>{
    const {name,value}=target
    this.setState({[name]:value})
}

handleFormSubmit=(e)=>{
    e.preventDefault()
    const {name,number}=this.state;
    const{onAdd}=this.props;
    const isValidForm=this.validateForm();

    if(!isValidForm) return
    onAdd({id:nanoid(),name,number});
    this.resetForm();
}
validateForm=()=>{
  const {name,number}=this.state;
  const{onChangeUnique}=this.props;
  if(!name || !number){
      alert('Some field is empty')
      return false
  }
  return onChangeUnique(name);
}

resetForm=()=>this.setState(INITIAL_STATE);

    render() {
        const {name,number}=this.state;
        
        return(
            <form className={css.form} onSubmit={this.handleFormSubmit}>
            <label className={css.label}>Name</label>
            <input type="text" 
                   className={css.input}
                   name="name"
                   value={name}
                   onChange={this.handleChangeForm}
                   placeholder="Enter name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required>
                   </input>
            <label className={css.label}>Number</label>
            <input className={css.input}
                   name="number"
                   value={number}
                   type="tel"
                   onChange={this.handleChangeForm}
                   placeholder="Enter phone number"
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required></input>
            <button className={css.button} type="submit">Add Contact</button>
        </form>)
        
        } 
} 

  
export default ContactForm;