import { Container, MainTitle, ContactsTitle, Message } from "./App.styled";
import { FormContact } from "./FormContact/FormContact";
import { Contacts } from "./Contacts/Contacts";
import { FormFilter } from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { Loader } from "./Loader/Loader";

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <FormContact />
      {isLoading && !error && <Loader />}
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
