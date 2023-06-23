import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, removeContact } from "./operations";

const contactsInitialState = {
  array: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.array = action.payload;
};

const handleFulfilledAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.array.push(action.payload);
};

const handleFulfilledRemoveContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const contactIndex = state.array.findIndex(
    (contact) => contact.id === action.payload.id
  );

  state.array.splice(contactIndex, 1);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(addContacts.fulfilled, handleFulfilledAddContact)
      .addCase(removeContact.fulfilled, handleFulfilledRemoveContact)
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
