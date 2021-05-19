import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import React from 'react';
import { Tiles } from '../../pages/Preview';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    gridTile: {
      position: 'relative',
      float: 'left',
      minHeight: '100vh',
      minWidth: '50%',
      overflow: 'hidden',
      height: '100vh',
    },
  })
);

export default function ResumeGridList({
  resumeData,
}: {
  resumeData: Array<Tiles>;
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {resumeData.map((tile) => (
          <GridListTile key={tile.img} className={classes.gridTile}>
            <div>
              {' '}
              <img
                style={{ maxWidth: '90%', maxHeight: '90%' }}
                src={tile.img}
                alt={tile.title}
              />
            </div>
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
