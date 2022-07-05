import React from 'react';
import { Employee } from '../../redux/employees/employees.types';
import Button from '../Button';

import { CardWrapper } from './Card.styled';

export interface CardProps {
  employee: Employee;
  activateEmployee: (id: Employee['id']) => void;
  deactivateEmployee: (id: Employee['id']) => void;
}

function Card({ employee, activateEmployee, deactivateEmployee }: CardProps) {
  const { id, employee_name, employee_salary, employee_age, active } = employee;

  return (
    <CardWrapper active={active}>
      <span>{id}</span>
      <span>{employee_name}</span>
      <span>{employee_salary}</span>
      <span>{employee_age}</span>
      <Button value='Activate' disabled={active} onClick={() => activateEmployee(id)}  />
      <Button value='Deactivate' disabled={!active} onClick={() => deactivateEmployee(id)} />
    </CardWrapper>
  );
}

export default Card;
