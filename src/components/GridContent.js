import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, Typography } from '@material-ui/core';

import FadeInSection from './FadeInSection';
import InfoContent from './InfoContent';

import swiftLogo from '../assets/swift.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

  // TODO: make sections fill out page
  return (
    <div className={classes.root}>
      <FadeInSection>
        <Grid container spacing={6} direction="row" alignItems="stretch">
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
          <Grid item xs>
            <InfoContent
              title="app development"
              mainText="Creating App Solutions for multiple platforms in
              multiple languages and technologies including Swift, Flutter,
              React Native and Java"
              altImg="App Development Technologies"
              exampleLink="www.google.com"
              img={swiftLogo}
            />
          </Grid>
          <Grid item xs>
            <InfoContent
              title="back-end development"
              mainText="Experience in working in agile teams to
              develop back-end technologies using Java, Node.js, Python,
              Typescript. Using important frameworks such as GraphQL."
              altImg="Backend Development Technologies"
              exampleLink="www.google.com"
              img="img"
            />
          </Grid>
          <Grid item xs>
            <InfoContent
              title="full stack development"
              mainText="Worked in full stack environments,
              developing in the full stack using a MERN solution stack. Focusing
              on using React with other core technologies to create innovative
              web solutions."
              altImg="Full Stack Development Technologies"
              exampleLink="www.google.com"
              img="img"
            />
          </Grid>
          <Grid item xs>
            <InfoContent
              title="devops and cloud development"
              mainText="Contributed to working with DevOps deployment with Jenkins using a CI/CD style. Combined with usage of AWS to deploy applications and microservices. Training to become AWS Developer Certified"
              altImg="Devops Development Technologies"
              exampleLink="www.google.com"
              img="img"
            />
          </Grid>
        </Grid>
      </FadeInSection>
    </div>
  );
}
