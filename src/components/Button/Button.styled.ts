import styled from "styled-components";

export const StyledButton = styled.button`
  background: #639;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  height: 40px;

  &:disabled{
    background-color: gray;
    pointer-events: none;
  }
`;
