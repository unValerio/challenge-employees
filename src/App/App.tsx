import React from 'react';

import Card from '../components/Card';
import { Container } from './App.styled' 

function App() {
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
