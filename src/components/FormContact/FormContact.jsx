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
import { selectContacts } from "../../redux/selectors";
import { addContacts } from "../../redux/operations";

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
  const contact = useSelector(selectContacts);
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

  const addContact = (name, number) => {
    const checkName = contact.some(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );
    if (checkName) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContacts({ name, number }));
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
