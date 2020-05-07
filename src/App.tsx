import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Theme } from './styles/theme';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
