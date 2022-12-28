import React from 'react'
import ContactComponent from '../components/contactComponent';
import ContactForm from '../components/forms/contactForm';
import { Contact } from '../models/contact.class'

export const ContactList = () => {

  const defaultContact =  new Contact('Juan', 'Berenguer',"juan@gmail.com",true,"123");
  const defaultContact1 = new Contact('David', 'David',"juan@gmail.com",true,"123");
  const defaultContact2 = new Contact('Paola', 'Lozano',"juan@gmail.com",false,"123");
  const defaultContact3 = new Contact('Fran', 'Mira',"juan@gmail.com",true,"123");
  const defaultContact4 = new Contact('David', 'David',"juan@gmail.com",true,"123");
  const defaultContact5 = new Contact('Paola', 'Lozano',"juan@gmail.com",false,"123");

  const[contacts, setContacts] = React.useState([defaultContact, defaultContact1, defaultContact2,defaultContact3,defaultContact4,defaultContact5]);

  function deleteContact(contact) {
    const indexToDelete = contacts.indexOf(contact);
    const newContacts = [...contacts];
    newContacts.splice(indexToDelete, 1);
    setContacts(newContacts);
  }

  function addContact(contact) {
   const index = contacts.indexOf(contact);
   const newContacts= [...contacts];
   newContacts.push(contact);
   setContacts(newContacts);
}

const conectContact=(contact)=>{
  const index = contacts.indexOf(contact);
  const newContacts= [...contacts];
  newContacts[index].conect =!contacts[index].conect;
  setContacts(newContacts)
}

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <h1 className="flex-center items-center space-x-3 ms-2">    </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {contacts.map((contact,index) => {
        return (
          <ContactComponent
            key={index}
            contact={contact}
            remove={deleteContact}
            conect={conectContact}
          >
          </ContactComponent>
        )
      })}
    </div>
    <ContactForm add={addContact}></ContactForm>
    </div>
    
  );
}
