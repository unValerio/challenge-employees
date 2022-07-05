import { createSlice } from '@reduxjs/toolkit';

import { Employees } from './employees.types';
import { getEmployees } from './employees.thunks';

const initialState: Employees = {
  data: [],
  status: 'PENDING',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployees.pending, (state) => {
      state.status = 'PENDING';
    });
    builder.addCase(getEmployees.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'FULFILLED';
    });
    builder.addCase(getEmployees.rejected, (state) => {
      state.status = 'REJECTED';
    });
  },
});

export const employeesReducer = employeesSlice.reducer;

export default employeesSlice;
