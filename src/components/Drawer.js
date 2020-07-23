import React from 'react';

import FadeInSection from './FadeInSection';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  link: {
    width: '100%',
  },
}));

const Drawer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FadeInSection>
        <Grid
          container
          spacing={6}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {children.map((child) => (
            <Grid className={classes.link} item>
              {child}
              <Divider variant="middle" />
            </Grid>
          ))}
        </Grid>
      </FadeInSection>
    </div>
  );
};

export default Drawer;
