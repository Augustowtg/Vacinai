import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 1.1rem;
  width: 500px;
  height: 200px;
  padding: 10px 15px;
  background-color: #1687ED;
  border: 1px solid #1687ED;
  color: white;
  transition: background-color 0.7s, color 0s;
  &:hover {
      background-color: transparent;
      color: #1687ED;
      cursor: pointer;
  }
`;
