import React from 'react';

import Card from '../components/Card';
import { Container } from './App.styled' 
import useApp from './useApp';

function App() {
  const {
    employeesStatus,
    activeEmployees,
    employeesData,
    activateEmployeeHandler,
    deactivateEmployeeHandler,
  } = useApp();

  return (
    <>
      <h3>activeEmployees</h3>

      {employeesStatus && activeEmployees.map((employee) => {
        const { employee_name } = employee;

        return (
          <>
            <span>{employee_name}</span><br />
          </>
        );
      })}

      <Container>
        {employeesStatus && employeesData.map((employee) => {
          return <Card
            activateEmployee={activateEmployeeHandler}
            deactivateEmployee={deactivateEmployeeHandler}
            key={employee.id}
            employee={employee}
            />
        })}
      </Container>
    </>
  );
}

export default App;
