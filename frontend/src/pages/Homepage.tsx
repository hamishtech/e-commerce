import React from 'react';
import PrimaryHomePage from '../components/HomePage/PrimaryHomePage';
import SecondaryHomePage from '../components/HomePage/SecondaryHomePage';

const Homepage = () => {
  return (
    <React.Fragment>
      <PrimaryHomePage />
      <SecondaryHomePage />
    </React.Fragment>
  );
};

export default Homepage;
