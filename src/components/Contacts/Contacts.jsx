import React from "react";
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsButton,
} from "./Contacts.styled";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilters } from "../../redux/selectors";
import { removeContact } from "../../redux/contactsSlice";

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const getContact = () => {
    const normalized = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  const deleteContact = (id) => {
    dispatch(removeContact(id));
  };

  const filteredContacts = getContact();

  return (
    <>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsName>
                {name}: {number}
              </ContactsName>
              <ContactsButton type="button" onClick={() => deleteContact(id)}>
                <BsTrash3 />
              </ContactsButton>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
};
