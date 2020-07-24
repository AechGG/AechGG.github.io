import React from 'react';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  createMuiTheme,
  CssBaseline,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { HashRouter, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import { SquareHoverButton } from './components/SquareHoverButton';

import logoBlack from './assets/logo-main.png';
import logoWhite from './assets/logo-dark.png';
import githubBlack from './assets/github-black-logo.png';
import githubWhite from './assets/github-white-logo.png';
import linkedinBlack from './assets/linkedin-black-logo.png';
import linkedinWhite from './assets/linkedin-white-logo.png';

import { useDarkMode } from './constants/theme';
import config from './services/config.service';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Work from './screens/Work';
import About from './screens/About';
import useWindowSize from './services/useWindowSize';

import './App.css';
import Drawer from './components/Drawer';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  socialLink: {
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
      width: 'auto',
    },
  },
  menuButton: {
    marginLeft: theme.spacing(1),
  },
}));

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, toggleDarkMode] = useDarkMode(
    prefersDarkMode ? 'dark' : 'light'
  );

  const themeConfig = createMuiTheme(theme);
  const classes = useStyles();
  const size = useWindowSize();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const smallScreen = size.width > config.smallScreenWidth;

  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline>
        <HashRouter basename="/">
          <NavBar>
            {size.width < config.smallScreenWidth ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            ) : null}

            {size.width < config.smallScreenWidth ? (
              <div className={classes.grow} />
            ) : null}
            <Link to="/">
              <img
                src={theme.palette.type === 'dark' ? logoWhite : logoBlack}
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
            {smallScreen ? (
              <SquareHoverButton title="home" to="/" border={true} />
            ) : null}
            {smallScreen ? (
              <SquareHoverButton title="about" to="/about" border={true} />
            ) : null}
            {smallScreen ? (
              <SquareHoverButton title="work" to="/work" border={true} />
            ) : null}
            {smallScreen ? (
              <SquareHoverButton title="contact" to="/contact" border={true} />
            ) : null}
            <div className={classes.grow} />
            {smallScreen ? (
              <a href={config.github} className={classes.socialLink}>
                <img
                  src={
                    theme.palette.type === 'dark' ? githubWhite : githubBlack
                  }
                  alt="github"
                  width="50"
                  height="50"
                />
              </a>
            ) : null}
            {smallScreen ? (
              <a href={config.linkedin} className={classes.socialLink}>
                <img
                  src={
                    theme.palette.type === 'dark'
                      ? linkedinWhite
                      : linkedinBlack
                  }
                  alt="linkedin"
                  width="50"
                  height="50"
                />
              </a>
            ) : null}
            <FormControlLabel
              control={
                <Switch
                  onClick={toggleDarkMode}
                  value={theme.palette.type === 'dark'}
                />
              }
            />
          </NavBar>

          {open ? (
            <Drawer>
              <SquareHoverButton
                title="home"
                to="/"
                border={false}
                onClick={handleDrawerOpen}
              />
              <SquareHoverButton
                title="about"
                to="/about"
                border={false}
                onClick={handleDrawerOpen}
              />
              <SquareHoverButton
                title="work"
                to="/work"
                border={false}
                onClick={handleDrawerOpen}
              />
              <SquareHoverButton
                title="contact"
                to="/contact"
                border={false}
                onClick={handleDrawerOpen}
              />
            </Drawer>
          ) : null}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
        </HashRouter>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
