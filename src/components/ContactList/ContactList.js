import { useSelector } from "react-redux";
import { ContactItem } from "./ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";
import { contactsSelector } from "../../redux/contacts";
import { contactsFilterSelector } from "../../redux/contactsFilter";

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const contactsFilter = useSelector(contactsFilterSelector);
  const getFiltredContacts = () => {
    if (contactsFilter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(contactsFilter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };
  const filtredContacts = getFiltredContacts();
  return (
    <List>
      {filtredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
