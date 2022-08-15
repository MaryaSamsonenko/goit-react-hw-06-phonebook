import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

// Selectors
export const contactsSelector = (state) => state.contacts;

//Actions
export const { addContact, removeContact } = contactsSlice.actions;

// Reducers
export default contactsSlice.reducer;
