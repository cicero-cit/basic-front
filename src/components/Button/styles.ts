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
    &.success {
      background: ${shade(0.2, Theme.green)};
    }

    &.error {
      background: ${shade(0.2, Theme.red)};
    }
    background: ${shade(0.2, Theme.darkBlue)};
  }

  &.success {
    background: ${props => props.theme.green};
  }

  &.error {
    background: ${props => props.theme.red};
  }
`;
