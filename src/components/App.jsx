import { Container, MainTitle, ContactsTitle, Message } from "./App.styled";
import { FormContact } from "./FormContact/FormContact";
import { Contacts } from "./Contacts/Contacts";
import { FormFilter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getError, getIsLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      {isLoading && !error && <h3>Loading...</h3>}
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
