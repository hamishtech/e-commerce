import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/Header';
import Payment from './pages/Checkout';
import FailPayment from './pages/FailPayment';
import Homepage from './pages/Homepage';
import Preview from './pages/Preview';
import Pricing from './pages/Pricing';
import Success from './pages/Success';
import WhyUs from './pages/WhyUs';

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
            <Homepage/>
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
          <Route path='/success'>
            <Success />
          </Route>{' '}
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/cancel'>
            <FailPayment />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
