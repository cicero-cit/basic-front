import styled from 'styled-components';
import { opacify } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  height: 150px;
  width: 150px;
  background: ${opacify(-0.3, Theme.white)};
  color: ${props => props.theme.darkBlue};
  border-radius: 50%;

  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .emoji {
    font-size: 50px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-flow: row;
`;
