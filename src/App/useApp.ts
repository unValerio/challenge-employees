import { useEffect } from 'react';

import {
  selectEmployeesData,
  selectEmployeesStatus,
  selectActiveEmployees
} from '../redux/employees/employees.selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { activateEmployee, deactivateEmployee } from '../redux/employees/employees.slice';
import { getEmployees } from '../redux/employees/employees.thunks'
import { Employee } from '../redux/employees/employees.types';

function useApp(){
  const dispatch = useAppDispatch();
  const employeesStatus = useAppSelector(selectEmployeesStatus);
  const employeesData = useAppSelector(selectEmployeesData);
  const activeEmployees = useAppSelector(selectActiveEmployees);

  const activateEmployeeHandler = (id: Employee['id']) => {
    dispatch(activateEmployee(id));
  }

  const deactivateEmployeeHandler = (id: Employee['id']) => {
    dispatch(deactivateEmployee(id));
  }

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch]);

  return {
    employeesStatus,
    activeEmployees,
    employeesData,
    activateEmployeeHandler,
    deactivateEmployeeHandler,
  };
}

export default useApp;