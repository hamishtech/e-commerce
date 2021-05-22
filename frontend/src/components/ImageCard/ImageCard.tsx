import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
import { truncateSync } from 'fs';

interface Props {
  picture: React.ReactNode;
  title: string;
  description: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
    paddingLeft: '70px',
  },
  title: { fontFamily: 'Nunito', fontWeight: 600, color: purple[400] },
  description: { fontFamily: 'Nunito', fontWeight: 400 },
});

export default function MediaCard({ picture, title, description }: Props) {
  const classes = useStyles();

  return (
    <Card elevation={1} className={classes.root}>
      <CardActionArea disabled={true}>
        <CardMedia className={classes.media}>{picture}</CardMedia>
        <CardContent>
          <Typography
            className={classes.title}
            gutterBottom
            variant='h5'
            component='h2'
          >
            {title}
          </Typography>
          <Typography
            className={classes.description}
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button
          size='small'
          href='/whyus'
          color='primary'
          style={{
            fontFamily: 'Nunito',
            fontWeight: 400,
            color: purple[500],
          }}
        >
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
