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
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }
    input {
      background: ${props => props.theme.lightBlue};
      border-radius: 10px;
      border: 2px solid ${props => props.theme.lightBlue};
      padding: 16px;
      width: 90%;
      color: ${props => props.theme.darkBlue};
      &::placeholder {
        color: ${props => props.theme.darkBlue};
      }
      & + input {
        margin-top: 8px;
      }
    }
    button {
      background: ${props => props.theme.darkBlue};
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: ${props => props.theme.white};
      width: 90%;
      font-weight: 500;
      margin-top: 16px;
      &:hover {
        background: ${shade(0.2, Theme.darkBlue)};
      }
    }
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
