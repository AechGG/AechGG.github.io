import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row !important',
    width: '100%',
    height: '82px',
  },
  toolbar: {
    width: '100%',
    alignItems: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
});

const NavBar = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.container} color="default">
        <Toolbar className={classes.toolbar}>{children}</Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
