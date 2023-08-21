import styled from 'styled-components';

export const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ButtonPrev = styled.button`
  padding: 0;
  text-align: left;
  border: none;
  min-width: 50px;
  background: transparent;
  color: green;

  &:active {
    color: violet;
  }
`;

export const ButtonNext = styled.button`
  padding: 0;
  text-align: right;
  border: none;
  min-width: 50px;
  background: transparent;
  color: green;

  &:active {
    color: violet;
  }
`;
