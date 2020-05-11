import styled from 'styled-components';

export const Button = styled.button`
  background: transparent;
  border: 0;
  height: 30px;

  & + button {
    padding-left: 10px;
  }

  svg {
    font-size: 15px;
    color: ${props => props.theme.black};
  }
`;
