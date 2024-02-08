import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterCars: (_, action) => {
        return action.payload
      },
    },
});

export const { filterCars } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;