import React from 'react';

import { StyledButton } from './Button.styled';

export interface ButtonProps {
  value: string;
  disabled?: boolean;
}

function Button({ value, disabled = false }: ButtonProps) {
  return <StyledButton disabled={disabled}>{value}</StyledButton>;
}

export default Button;
