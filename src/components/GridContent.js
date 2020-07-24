import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import FadeInSection from './FadeInSection';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
}));

export default function CenteredGrid({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FadeInSection>
        <Grid container spacing={6}>
          {children}
        </Grid>
      </FadeInSection>
    </div>
  );
}
