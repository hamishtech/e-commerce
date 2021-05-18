import { createMuiTheme, Grid, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/Header';
import Pricing from './pages/Pricing';
import HomePageMain from './components/HomePage/PrimaryHomePage';
import HomePageSecondary from './components/HomePage/SecondaryHomePage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import WhyUs from './pages/WhyUs';
import Preview from './pages/Preview';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
  typography: { fontFamily: 'Nunito' },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/whyus'>
            <WhyUs />
          </Route>
          <Route path='/preview'>
            <Preview />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
