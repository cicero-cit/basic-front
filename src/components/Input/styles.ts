import styled, { css } from 'styled-components';

interface Container {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<Container>`
  background: ${props => props.theme.lightBlue};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.lightBlue};
  padding: 16px;
  width: 100%;
  color: ${props => props.theme.darkBlue};
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.purple};
      border-color: ${props.theme.purple};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.purple};
    `}

  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    color: ${props => props.theme.darkBlue};

    &::placeholder {
      color: ${props => props.theme.darkBlue};
    }
  }

  svg {
    margin-right: 16px;
  }
`;
