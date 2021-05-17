import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/Header';
import HomePageMain from './pages/PrimaryHomePage';
import HomePageSecondary from './pages/SecondaryHomePage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePageMain />
      <HomePageSecondary />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
