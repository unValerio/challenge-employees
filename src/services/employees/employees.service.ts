// import axios from 'axios';

import axios from 'axios';
import { EmployeesData } from '../../redux/employees/employees.types';

export const getEmployees = async () => {
  const response = await axios({
    method: 'get',
    url: 'https://dummy.restapiexample.com/api/v1/employees',
  });

  const employees: EmployeesData = response.data.data;

  return employees;
};
