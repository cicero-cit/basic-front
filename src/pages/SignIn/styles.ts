import styled from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  width: 100%;
  h1 {
    color: ${props => props.theme.white};
  }
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    a {
      color: ${props => props.theme.darkBlue};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, Theme.darkBlue)};
      }
    }
  }
  > a {
    color: ${props => props.theme.darkBlue};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${shade(0.2, Theme.darkBlue)};
    }
    svg {
      margin-right: 16px;
    }
  }
`;
