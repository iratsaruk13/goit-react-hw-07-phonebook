import { Container, MainTitle, ContactsTitle, Message } from "./App.styled";
import { FormContact } from "./FormContact/FormContact";
import { Contacts } from "./Contacts/Contacts";
import { FormFilter } from "./Filter/Filter";
import { useSelector } from "react-redux";
import { getContacts } from "../redux/selectors";

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      <ContactsTitle>Contacts</ContactsTitle>
      <FormFilter label="Find contacts by name" />
      {contacts.length === 0 ? (
        <Message>You don't have contacts yet</Message>
      ) : (
        <Contacts />
      )}
    </Container>
  );
};
