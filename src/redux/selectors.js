export const selectContacts = (state) => state.contacts.array;
export const selectFilters = (state) => state.filters.value;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
