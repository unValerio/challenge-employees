import { createAsyncThunk } from '@reduxjs/toolkit';

import { getEmployees as getEmployeesService } from '../../services/employees';
import { EmployeesData } from './employees.types';

export const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
  const employees: EmployeesData = await getEmployeesService();

  return employees;
});
