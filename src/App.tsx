import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Theme } from './styles/theme';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={Theme}>
      <SignIn />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
