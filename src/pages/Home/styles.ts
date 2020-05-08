import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Theme } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1200px;
  min-width: 320px;
  margin: 0 auto;
  padding: 60px 15px;

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
    margin: 50px 0 0;
    width: 300px;
    text-align: center;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  > a {
    color: ${props => props.theme.black};
    display: block;
    margin-top: 50px;
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

export const ListContainer = styled.div`
  margin-left: 30px;
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  overflow: auto;
  justify-content: center;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 50px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.darkBlue};
    border-radius: 40px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${shade(0.2, Theme.darkBlue)};
  }

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }
`;
