import React from 'react';
import Button from '../Button';

import { CardWrapper } from './Card.styled';

export interface CardProps {
  active?: boolean;
}

function Card({ active = false }: CardProps) {
  return (
    <CardWrapper active={active}>
      <span>id</span>
      <span>name</span>
      <span>salary</span>
      <span>age</span>
      <Button value='Activate' disabled />
      <Button value='Deactivate' />
    </CardWrapper>
  );
}

export default Card;
