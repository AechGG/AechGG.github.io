import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 200,
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
});

const InfoContent = (props) => {
  const classes = useStyles();
  const { title, mainText, exampleTitle, exampleLink, img } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {mainText}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {exampleText}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Example: {exampleTitle}</Button>
      </CardActions>
      {/* <CardMedia className={classes.media} image={img} title={title} /> */}
    </Card>
  );
};

export default InfoContent;
