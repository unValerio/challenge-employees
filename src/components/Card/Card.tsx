import React from 'react';
import { Employee } from '../../redux/employees/employees.types';
import Button from '../Button';

import { CardWrapper } from './Card.styled';

export interface CardProps {
  employee: Employee;
  active?: boolean;
}

function Card({ employee, active = false }: CardProps) {
  const { id, employee_name, employee_salary, employee_age } = employee;

  return (
    <CardWrapper active={active}>
      <span>{id}</span>
      <span>{employee_name}</span>
      <span>{employee_salary}</span>
      <span>{employee_age}</span>
      <Button value='Activate' disabled />
      <Button value='Deactivate' />
    </CardWrapper>
  );
}

export default Card;
