import { purple } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import TemplateGrid from '../components/TemplateView/TemplateItem';
import { resumeData } from './Preview';

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
    width: '100%',
  },
}));

export default function Templates() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <div className={classes.root}>
        <Container maxWidth='xl' component='main'>
          <Grid container spacing={5} alignItems='flex-end'>
            <Grid item md={12} style={{ width: '100%' }}>
              <Typography
                style={{
                  fontFamily: 'Nunito',
                  fontWeight: 900,
                  color: purple[500],
                  marginTop: '10px',
                }}
                component='h2'
                variant='h3'
                align='center'
                color='textPrimary'
                gutterBottom
              >
                Templates
              </Typography>
            </Grid>
            {resumeData.map((template) => (
              <Grid md={6} xs={12} item key={template.id}>
                <TemplateGrid
                  image={template.img}
                  price={template.price}
                  title={template.title}
                  id={template.id}
                ></TemplateGrid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}
