import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    height: 300,
    // display: 'flex',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 200,
    width: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

const InfoContent = (props) => {
  const classes = useStyles();
  const { title, mainText, exampleTitle, exampleLink, img } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea
        className={classes.hide}
        onClick={() => console.log('click')}
      >
        <CardMedia className={classes.media} image={img} title="image text" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {mainText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default InfoContent;
