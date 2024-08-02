import { createSlice } from "@reduxjs/toolkit";

const sliceApp = createSlice({
  name: "model",
  initialState: {
    open: false,
    emails: [],
    selectEmail: null,
    searchText:"",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectEmail = action.payload;
    },
    setSearch:(state , action )=>{
      state.searchText = action.payload
    }
  },
});

export const { setOpen, setEmails, setSelectedEmail , setSearch } = sliceApp.actions;
export default sliceApp.reducer;
