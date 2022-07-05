import React, { useEffect } from 'react';

import Card from '../components/Card';
import { selectEmployeesData, selectEmployeesStatus } from '../redux/employees/employees.selectors';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Container } from './App.styled' 

import { getEmployees } from '../redux/employees/employees.thunks'

function App() {
  const dispatch = useAppDispatch();
  const employeesStatus = useAppSelector(selectEmployeesStatus);
  const employeesData = useAppSelector(selectEmployeesData)

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch]);

  return (
    <>
      <h3>activeEmployees</h3>
      <span>someone</span>
      <Container>
        {employeesStatus && employeesData.map((employee) => {
          return <Card key={employee.id} employee={employee} active={true} />
        })}
      </Container>
    </>
  );
}

export default App;
