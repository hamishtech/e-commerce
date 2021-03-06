import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/Header';
import FailPayment from './pages/FailPayment';
import Features from './pages/Features';
import Homepage from './pages/Homepage';
import Page404 from './pages/Page404';
import Preview from './pages/Preview';
import Success from './pages/Success';
import Templates from './pages/Templates';

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
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route path='/whyus'>
            <Features />
          </Route>
          <Route path='/preview'>
            <Templates />
          </Route>
          <Route path='/success'>
            <Success />
          </Route>
          <Route path='/cancel'>
            <FailPayment />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
