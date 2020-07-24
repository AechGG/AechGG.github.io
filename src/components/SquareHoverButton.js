import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  link: {
    border: 'none',
    color: 'black',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '18px',
    margin: '2px 1px',
    textDecorationColor: 'transparent',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  border: {
    transition: '0.2s',
    '&:hover': {
      border: `4px solid ${theme.palette.text.primary}`,
    },
  },
  //   linkActive: {
  //     borderColor: '#000000',
  //   },
}));

export const SquareHoverButton = (props) => {
  const { title, to, border, onClick } = props;
  const classes = useStyles();
  return (
    <NavLink
      to={to}
      className={clsx(classes.link, border && classes.border)}
      onClick={onClick}
    >
      <Typography variant="inherit" color="textPrimary">
        {title}
      </Typography>
    </NavLink>
  );
};

SquareHoverButton.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  border: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};
