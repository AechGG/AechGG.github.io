import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

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
          <Grid item xs={12}>
            <Box>
              App Development. Creating App Solutions for multiple platforms in
              multiple languages and technologies including Swift, Flutter,
              React Native and Java
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              Back-end Development. Experience in working in agile teams to
              develop back-end technologies using Java, Node.js, Python,
              Typescript. Using important frameworks such as GraphQL.
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              Full Stack Development. Worked in full stack environments,
              developing in the full stack using a MERN solution stack. Focusing
              on using React with other core technologies to create innovative
              web solutions.
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>DevOps and Cloud Development</Box>
          </Grid>
        </Grid>
      </FadeInSection>
    </div>
  );
}
