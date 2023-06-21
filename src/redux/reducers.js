import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contact",
  storage,
};

const persistedReducerContacts = persistReducer(persistConfig, contactsReducer);

export const reducer = {
  contacts: persistedReducerContacts,
  filters: filterReducer,
};
