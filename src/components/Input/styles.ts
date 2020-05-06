import styled from 'styled-components';

export const Container = styled.div`
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
