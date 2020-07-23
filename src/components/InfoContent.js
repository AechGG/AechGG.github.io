import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    // display: 'flex',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'transparent',
  },
  hide: {
    '-webkit-transition': 'opacity 0.5s ease-in-out',
    '-moz-transition': 'opacity 0.5s ease-in-out',
    '-ms-transition': 'opacity 0.5s ease-in-out',
    '-o-transition': 'opacity 0.5s ease-in-out',
    transition: 'opacity 0.5s ease-in-out',
    opacity: 1,
    '&:hover': {
      opacity: 0.5,
    },
  },
  show: {
    '-webkit-transition': 'opacity 0.5s ease-in-out',
    '-moz-transition': 'opacity 0.5s ease-in-out',
    '-ms-transition': 'opacity 0.5s ease-in-out',
    '-o-transition': 'opacity 0.5s ease-in-out',
    transition: 'opacity 0.5s ease-in-out',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
  },
});

// TODO: Create images for each section
// TODO: Link images to pages etc
// TODO: add this eventually to make them all dragable https://github.com/mui-org/material-ui/issues/5476
// Also this https://www.framer.com/motion/
const InfoContent = (props) => {
  const classes = useStyles();
  const { title, mainText, img, altImg } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.hide}
        onClick={() => console.log('click')}
      >
        <CardMedia className={classes.media} image={img} title={altImg}>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              {mainText}
            </Typography>
          </CardContent>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default InfoContent;
