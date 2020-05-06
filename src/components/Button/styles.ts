import { shade } from 'polished';
import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const Container = styled.button`
  background: ${props => props.theme.darkBlue};
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: ${props => props.theme.white};
  width: 100%;
  font-weight: 500;
  margin-top: 16px;

  &:hover {
    background: ${shade(0.2, Theme.darkBlue)};
  }
`;
