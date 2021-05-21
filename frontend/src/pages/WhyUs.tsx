import {
    Button,
    Container,
    Grid,
    Icon,
    makeStyles,

    Typography
} from '@material-ui/core';
import React from 'react';
import Customizable from '../components/svg/Features/Customizable';
import MadeFor from '../components/svg/Features/MadeFor';
import Simple from '../components/svg/Features/Simple';
import StandOut from '../components/svg/Features/StandOut';
import FeatureCard from '../components/WhyUs/Card';

const useStyles = makeStyles({
  root: {
    minHeight: '70vh',
    marginTop: '150px',
    textAlign: 'center',
    minWidth: '100%',
  },
  title: { fontFamily: 'Nunito', fontWeight: 800 },
  card: { marginTop: '50px' },
});

export interface cards {
  title: string;
  subtitle: string;
  picture: React.ReactNode;
}

const featureCards: Array<cards> = [
  {
    title: 'Stand out ',
    subtitle: 'Modern and stylish feel',
    picture: <StandOut />,
  },
  {
    title: 'Tailored',
    subtitle: 'Made for Investment Banking',
    picture: <MadeFor />,
  },
  {
    title: 'Fully customizable',
    subtitle: 'Easily editable',
    picture: <Customizable />,
  },
  {
    title: 'Simple',
    subtitle: 'Clean & timeless template',
    picture: <Simple />,
  },
];

const WhyUs = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <div>
          <Typography variant='h3' className={classes.title}>
            Why use our resumes?
          </Typography>
          <Grid container alignItems='center' spacing={2}>
            {featureCards.map((card) => {
              return (
                <Grid
                  key={card.title}
                  md={3}
                  sm={6}
                  xs={12}
                  zeroMinWidth
                  className={classes.card}
                  item
                >
                  <FeatureCard
                    title={card.title}
                    subtitle={card.subtitle}
                    picture={card.picture}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <Button
          style={{ marginTop: '100px' }}
          href='/preview'
          variant='contained'
          size='large'
          color='primary'
          endIcon={<Icon>send</Icon>}
        >
          Preview Templates{' '}
        </Button>
      </Container>
    </>
  );
};

export default WhyUs;
