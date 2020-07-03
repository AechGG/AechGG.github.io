import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';

import FadeInSection from '../components/FadeInSection';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    flexGrow: 1,
    width: '100%',
  },
  card: {
    minHeight: 400,
    maxHeight: 750,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  greeting: {
    fontSize: 50,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  specifics: {
    fontSize: 35,
    textAlign: 'center',
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeInSection>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography className={classes.greeting}>
                      hello there
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.greeting}>
                      i'm harrison
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.specifics}>
                      app developer
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.specifics}>
                      back-end developer
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography className={classes.specifics}>
                      full stack developer
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </FadeInSection>
    </div>
  );
}
