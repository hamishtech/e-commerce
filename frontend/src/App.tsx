import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import Layout from './components/Layout/index';
import NavBar from './components/Layout/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
  typography: {
    fontFamily: 'Oxygen',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>hello</div>{' '}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
