import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

import bg from '../assets/background.jpg';
import train from '../assets/train.gif';
import programming from '../assets/programming.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    minHeight: 150,
    maxHeight: 400,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              alt="Spiderman"
              height="400"
              image={bg}
              title="Spider-man Into the Spider-verse"
            />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Most Recent Project
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Currently I have been working on this website, creating a
                  'React Hub' for my brand. Giving me a great way to demonstrate
                  my React skills as well as what else I have been up to. Click
                  here to see my latest report on how the website is going and
                  check out the source code.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Traing"
                height="200"
                image={train}
                title="What we aren't doing right now."
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Blog Post: 13/04/20
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Being inside all the time sucks but this means a lot more time
                  to learn.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Programming"
                height="200"
                image={programming}
                title="Me right now."
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Random Cool Thing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  I'll be updating this to always point a cool thing I found
                  recently.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
