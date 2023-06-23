import React from "react";
import {
  ContactsList,
  ContactsItem,
  ContactsName,
  ContactsButton,
} from "./Contacts.styled";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectFilters } from "../../redux/selectors";
import { removeContact } from "../../redux/operations";

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
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

  const formattedNumber = (number) => {
    const isFormatted = /^\d{3}-\d{2}(-\d{2})+$/.test(number);

    if (isFormatted) {
      return number;
    } else {
      const digitsOnly = number.replace(/\D/g, "");

      let formattedNumber = digitsOnly.substring(0, 3) + "-";
      for (let i = 3; i < digitsOnly.length; i += 1) {
        if ((i - 3) % 2 === 0 && i !== 3) {
          formattedNumber += "-";
        }

        formattedNumber += digitsOnly[i];
      }
      return formattedNumber;
    }
  };

  return (
    <>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsName>
                {name}: {formattedNumber(number)}
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
