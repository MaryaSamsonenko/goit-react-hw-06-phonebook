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
export const contactsSelector = (state) => state.contacts;
export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
