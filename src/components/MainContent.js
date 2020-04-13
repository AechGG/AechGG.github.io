import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import bg from '../assets/background.jpg';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  fullWidth: {
    width: '100%',
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <main
      className={classes.fullWidth}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className={classes.title}>
        <Typography color="textPrimary" variant="h6">
          Welcome, feel free to checkout what I've been up to
        </Typography>
      </div>
      <div className={classes.content}>
        <Typography color="textPrimary" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;
