import { useSelector } from "react-redux";
import { ContactItem } from "../ContactsItem/ContactsItem";
import { List } from "./ContactList.styled";

export const ContactList = () => {
  const filter = useSelector((state) => state.filter);
  const contacts = useSelector((state) => state.contacts);
  const getFiltredContacts = () => {
    if (filter) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
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
