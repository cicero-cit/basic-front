import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  text-align: center;
  width: 100%;

  animation: ${appearFromBottom} 1s;

  h3 {
    color: ${props => props.theme.black};
  }

  form {
    margin: 80px 0;
    width: 300px;
    text-align: center;
  }

  > a {
    color: ${props => props.theme.black};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, Theme.black)};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
