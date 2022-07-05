import React, { useEffect } from 'react';

import Card from '../components/Card';
import { useAppSelector } from '../redux/hooks';
import { Container } from './App.styled' 

function App() {
  const employeesStatus = useAppSelector(selectEmployeesStatus);

  useEffect(() => {
    if()
  }, []);

  return (
    <>
      <h3>activeEmployees</h3>
      <span>someone</span>
      <Container>
        <Card active={true} />
        <Card active={false} />
      </Container>
    </>
  );
}

export default App;
