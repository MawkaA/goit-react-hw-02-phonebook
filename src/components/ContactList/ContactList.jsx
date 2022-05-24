import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';


const ContactList = ({ contacts, onDeleteContact }) => (
    <ul >
      {contacts.map(({ id, name,number }) => (
        <li className={ css.container} key={id} >
          <p className={ css.name}>{name}</p>
          <p className={ css.name}>{number}</p>
          <button className={ css.button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
  


ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }),
        ),
}

export default ContactList;