import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    paddingRight: '50px',
  },
});

export const NewPage = (props) => {
  const { title, to } = props;
  const classes = useStyles();
  return (
    <Link to={to} className={classes.link}>
      <Typography variant="title" color="inherit">
        {title}
      </Typography>
    </Link>
  );
};
