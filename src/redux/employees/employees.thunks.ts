import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeesData } from './employees.types';

export const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
  const employees: EmployeesData = [
    {
      employee_age: 61,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      id: 1,
      profile_image: "",
    }
  ];
  
  return employees;
});
