import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardMedia } from '@material-ui/core';

import fire from '../assets/fire.gif';

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
    maxHeight: 750,
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
              alt="Work in Progress"
              height="800"
              image={fire}
              title="work in progress"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
