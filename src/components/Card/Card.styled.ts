import styled from 'styled-components';

export const CardWrapper = styled.div<{ active?: boolean }>`
  border: 1px solid hsla(0,0%,55%,.3);
  box-shadow: 10px 5px 5px #eeeded;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-left: 25px;
  padding: 20px;
  width: 260px;

  ${({ active }) => active ? `border: 2px solid #282c34;` : null}
`;