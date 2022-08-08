import { ContactForm } from "../ContactForm/ContactForm";
import { Filter } from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";
import { Container } from "./App.styled";

export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
