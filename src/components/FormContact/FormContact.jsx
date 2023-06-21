import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  FormLabel,
  FormInput,
  Error,
  FormContactBtn,
} from "./FormContact.styled";
import { FcPlus } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors";
import { addContacts } from "../../redux/contactsSlice";

const phoneValidation =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = Yup.object().shape({
  name: Yup.string().required("The field Name is required"),
  number: Yup.string()
    .required("The field Number is required")
    .min(7, "The number must be at least 7 digits long")
    .max(14, "The number can consist of maximum 14 digits")
    .matches(phoneValidation, "The number must consist of digits"),
});

export const FormContact = () => {
  const contact = useSelector(getContacts);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    addContact(data.name, data.number);
    reset();
  };

  const normalizedNumber = (number) => {
    let normalizedNumber = number.substring(0, 3) + "-";
    for (let i = 3; i < number.length; i += 1) {
      if ((i - 3) % 2 === 0 && i !== 3) {
        normalizedNumber += "-";
      }
      normalizedNumber += number[i];
    }
    return normalizedNumber;
  };

  const addContact = (name, number) => {
    const formattedNumber = normalizedNumber(number);

    const checkName = contact.some(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContacts(name, formattedNumber));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput type="text" id="name" {...register("name")} />
        {errors.name && <Error> {errors.name?.message}</Error>}
      </div>
      <div>
        <FormLabel htmlFor="number">Number:</FormLabel>
        <FormInput type="tel" id="number" {...register("number")} />
        {errors.number && <Error> {errors.number?.message}</Error>}
      </div>
      <FormContactBtn type="submit">
        Add contact <FcPlus />{" "}
      </FormContactBtn>
    </StyledForm>
  );
};
