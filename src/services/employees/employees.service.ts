// import axios from 'axios';

import { EmployeesData } from '../../redux/employees/employees.types';

export const getEmployees = async () => {
  const employees: EmployeesData = [
    {
      employee_age: 61,
      employee_name: "Tiger Nixon",
      employee_salary: 320800,
      id: 1,
      profile_image: "",
    },
    {
      employee_age: 63,
      employee_name: "Garrett Winters",
      employee_salary: 170750,
      id: 2,
      profile_image: "",
    }
  ];

  return employees;
};
