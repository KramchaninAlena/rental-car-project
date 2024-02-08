import { createSlice } from "@reduxjs/toolkit";
import { fetchCatalog } from "./thunks";

const initialState = {
    cars: [],
    // isLoadMore: false,
    
  };
  
  export const contactsSlice = createSlice({
    name: 'catalog',
    initialState,
    extraReducers: builder => {
      builder
        .addCase(fetchCatalog.fulfilled, (state, action) => {
            state.cars = action.payload;
            // state.isLoadMore = true;
        })
        // .addCase(addContact.fulfilled, handleFulfilledAdd)
        // .addCase(deleteContact.fulfilled, handleFulfilledDelete)
        // .addMatcher(action => action.type.endsWith('pending'), handlePending)
        // .addMatcher(action => action.type.endsWith('rejected'), handleRejected)
        // .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled);
    },
  });
  
  export const catalogReducer = contactsSlice.reducer;