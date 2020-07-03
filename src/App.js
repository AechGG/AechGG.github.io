import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';
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

// TODO: Alter app bar to be responsive

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
}));

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, toggleDarkMode] = useDarkMode(
    prefersDarkMode ? 'dark' : 'light'
  );

  const themeConfig = createMuiTheme(theme);
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={themeConfig}>
      <CssBaseline>
        <HashRouter basename="/">
          <NavBar>
            <Link to="/">
              <img
                src={theme.palette.type === 'dark' ? logoWhite : logoBlack}
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
            <SquareHoverButton title="home" to="/" />
            <SquareHoverButton title="about" to="/" />
            <SquareHoverButton title="work" to="/" />
            <SquareHoverButton title="contact" to="/" />
            <div className={classes.grow} />
            <a href={config.github} className={classes.socialLink}>
              <img
                src={theme.palette.type === 'dark' ? githubWhite : githubBlack}
                alt="github"
                width="50"
                height="50"
              />
            </a>
            <a href={config.linkedin} className={classes.socialLink}>
              <img
                src={
                  theme.palette.type === 'dark' ? linkedinWhite : linkedinBlack
                }
                alt="linkedin"
                width="50"
                height="50"
              />
            </a>
            <FormControlLabel
              control={
                <Switch
                  onClick={toggleDarkMode}
                  value={theme.palette.type === 'dark'}
                />
              }
            />
          </NavBar>

          <Route exact path="/" component={Home} />
        </HashRouter>
      </CssBaseline>
    </MuiThemeProvider>
  );
}

export default App;
