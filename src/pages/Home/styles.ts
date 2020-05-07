import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-direction: column;

    #app main {
      margin-left: 0;
      margin-top: 30px;
    }

    #app aside {
      width: 100%;
    }
  }
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

    position: absolute;
    top: 0;
    right: 15px;

    &:hover {
      color: ${shade(0.2, Theme.black)};
    }

    svg {
      margin-right: 16px;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ListContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;
