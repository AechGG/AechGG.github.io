import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    border: 'none',
    color: 'black',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '18px',
    margin: '2px 1px',
    transition: '0.2s',
    '&:hover': {
      border: `4px solid ${theme.palette.text.primary}`,
    },
    textDecorationColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  //   linkActive: {
  //     borderColor: '#000000',
  //   },
}));

export const SquareHoverButton = (props) => {
  const { title, to } = props;
  const classes = useStyles();
  return (
    <NavLink to={to} className={classes.link}>
      <Typography variant="inherit" color="textPrimary">
        {title}
      </Typography>
    </NavLink>
  );
};
