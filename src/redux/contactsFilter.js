import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "contactsFilter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const contactsFilterSelector = (state) => state.contactsFilter;
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
