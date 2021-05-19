import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import Footer from '../components/Layout/Footer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    marginTop: '50px',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  cardHeaderRoot: { color: purple[500] },
  cardHeaderContent: { fontFamily: 'Nunito', fontWeight: 600 },
  cardHeaderSubheader: { fontFamily: 'Nunito' },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: '100px',
    backgroundColor: purple[100],
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <div className={classes.root}>
        <Container
          maxWidth='sm'
          component='main'
          className={classes.heroContent}
        >
          <Typography
            style={{
              fontFamily: 'Nunito',
              fontWeight: 900,
              color: purple[500],
            }}
            component='h2'
            variant='h3'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            style={{ fontFamily: 'Nunito', fontWeight: 600 }}
            variant='h6'
            align='center'
            color='textSecondary'
            component='p'
          >
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default Material-UI
            components with little customization.
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth='md' component='main'>
          <Grid container spacing={5} alignItems='flex-end'>
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Enterprise' ? 12 : 12}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                    classes={{
                      root: classes.cardHeaderRoot,
                      title: classes.cardHeaderContent,
                      subheader: classes.cardHeaderSubheader,
                    }}
                  />
                  <CardContent>
                    <div className={classes.cardPricing}>
                      <Typography
                        component='h2'
                        variant='h4'
                        color='textPrimary'
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant='h6' color='textSecondary'>
                        /mo
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          style={{ fontFamily: 'Nunito' }}
                          component='li'
                          variant='subtitle1'
                          align='center'
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant='outlined'
                      color='primary'
                      style={{ fontFamily: 'Nunito' }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
