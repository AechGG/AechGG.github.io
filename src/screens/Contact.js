import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FadeInSection from '../components/FadeInSection';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '10%',
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 80,
    },
  },
  subText: {
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 40,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FadeInSection>
        <Typography className={classes.text} align="center">
          Let's have a chat
        </Typography>
        <Typography className={classes.subText} align="center">
          Contact me using the social links
        </Typography>
        <Typography className={classes.subText} align="center">
          or use this quick link
        </Typography>
      </FadeInSection>
    </Box>
  );
};

export default Contact;
