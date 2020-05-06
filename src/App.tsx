import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import { Theme } from './styles/theme';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <ThemeProvider theme={Theme}>
      <SignUp />
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default App;
