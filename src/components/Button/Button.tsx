import React from 'react';

import { StyledButton } from './Button.styled';

export interface ButtonProps {
  value: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({ value, disabled = false, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick} disabled={disabled}>{value}</StyledButton>;
}

export default Button;
