import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Employee, Employees } from './employees.types';
import { getEmployees } from './employees.thunks';

const initialState: Employees = {
  data: [],
  status: 'PENDING',
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    activateEmployee: (state, action: PayloadAction<Employee['id']>) => {
      const id = action.payload;

      // This implementation should be improved cause we are looping throw all of the array
      // A better implementation could be modifying the EmployeeData to be an object
      // so we can access the required object directly with the id instead of searching for it
      state.data = state.data.map((employee) => {
        if(employee.id === id){
          return { ...employee, active: true };
        }
        return employee;
      });
    },
    deactivateEmployee: (state, action: PayloadAction<Employee['id']>) => {
      const id = action.payload;

      // Same improvement applys here
      state.data = state.data.map((employee) => {
        if(employee.id === id){
          return { ...employee, active: false };
        }
        return employee;
      });
    },
  },
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

export const { activateEmployee, deactivateEmployee } = employeesSlice.actions; 

export const employeesReducer = employeesSlice.reducer;

export default employeesSlice;
