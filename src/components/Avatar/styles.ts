import styled from 'styled-components';

export const Container = styled.div`
  height: 150px;
  width: 150px;
  background: ${props => props.theme.white};
  color: ${props => props.theme.darkBlue};
  border-radius: 50%;

  margin: 10px;
`;
