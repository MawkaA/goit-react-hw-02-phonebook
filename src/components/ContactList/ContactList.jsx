import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactListItem = ({name,number,onRemove})=>{
    return(
        <li>
            {name}:{number} 
            <button onClick={onRemove}>
                delete
            </button>
        </li>
    )
}

const ContactList = ({contacts,onRemove})=>{
    if (contacts.length===0) return null;
    return(
        <ul className={css.contactList}>
            {contacts.map(contact=><ContactListItem {...contact} onRemove={onRemove}/>)}
        </ul>
    )
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    }
ContactList.propTypes = {
    contacts: PropTypes.array(PropTypes.string.isRequired).isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default ContactList;