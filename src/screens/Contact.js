import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
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
    [theme.breakpoints.up('xs')]: {
      fontSize: 40,
    },
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignItemsAndJustifyContent: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Contact = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <FadeInSection>
        <Typography className={classes.text} align="center">
          let's have a chat
        </Typography>
        <Typography className={classes.subText} align="center">
          contact me using the social links
        </Typography>
        <Typography className={classes.subText} align="center">
          or use this quick link
        </Typography>

        <div className={classes.alignItemsAndJustifyContent}>
          <Button
            variant="outlined"
            href="mailto:aechgg@gmail.com?subject=Let's%20have%20a%20chat&body=Hi%20Harrison%2C%0D%0A%0D%0AI%20wanted%20to%20have%20a%20quick%20chat%20about%20your%20work%20with%20you.%0D%0A%0D%0AThanks"
            endIcon={<SendIcon />}
            align="center"
          >
            email me
          </Button>
        </div>
      </FadeInSection>
    </Box>
  );
};

export default Contact;
