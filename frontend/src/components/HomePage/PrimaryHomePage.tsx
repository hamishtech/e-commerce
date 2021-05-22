import {
  Button,
  Collapse,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { ExpandMore } from '@material-ui/icons';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React, { useEffect, useState } from 'react';
import { Link as AutoScroll } from 'react-scroll';
import { resumeData } from '../../pages/Preview';
import TemplateCarousel from '../Preview/Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    [theme.breakpoints.down('md')]: {
      height: '100vh',
    },
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '100px',
    width: '100%',
  },
  carouselContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '100px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '500px',
    },
  },
  pageTitle: { fontFamily: 'Nunito', fontWeight: 900, marginBottom: 20 },
  pageTitle2: { fontFamily: 'Nunito', fontWeight: 400, paddingTop: 20 },
  colorTitle: { color: purple[600] },
  goDown: {
    color: purple[600],
    fontSize: '3rem',
    marginTop: '-50px',
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
  btn: { marginTop: 25 },
}));

const HomePageMain = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ height: '5rem' }}></div>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={100}
      >
        <Grid container spacing={0} className={classes.titleContainer}>
          <Grid item md={4} xs={12}>
            {' '}
            <Typography variant='h3' className={classes.pageTitle}>
              Spearhead your career with my
              <span className={classes.colorTitle}>Resume</span>
            </Typography>
            <Typography variant='h5' className={classes.pageTitle2}>
              Only 2% of resumes make it past the first round. <br />
              <span className={classes.colorTitle}>Be in the top 2%</span>
            </Typography>
            <div style={{ marginTop: '50px' }}>
              {' '}
              <AutoScroll to='part2' smooth={true}>
                <IconButton>
                  <ExpandMore className={classes.goDown}></ExpandMore>
                </IconButton>
              </AutoScroll>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className={classes.carouselContainer}>
              <div>
                {' '}
                <TemplateCarousel resumeData={resumeData} />
                <Button
                  href='/preview'
                  size='small'
                  color='primary'
                  variant='contained'
                  className={classes.btn}
                  startIcon={<VisibilityIcon />}
                >
                  View All Templates{' '}
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Collapse>
    </div>
  );
};

export default HomePageMain;
