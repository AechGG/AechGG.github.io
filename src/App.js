import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  createMuiTheme,
} from '@material-ui/core';
import { HashRouter, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import logoBlack from './assets/logo-main.png';
import logoWhite from './assets/logo-dark.png';
import './App.css';
import { NewPage } from './components/NewPage';
import { useDarkMode } from './constants/theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, toggleDarkMode] = useDarkMode(
    prefersDarkMode ? 'dark' : 'light'
  );

  const themeConfig = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={themeConfig}>
      <HashRouter basename="/">
        <div>
          <NavBar>
            <Link to="/">
              <img
                src={theme.palette.type === 'dark' ? logoBlack : logoWhite}
                alt="logo"
                width="50"
                height="50"
              />
            </Link>
            <NewPage to="/" title="Home" />
            <NewPage to="/about" title="Projects" />
            <NewPage to="/about" title="Uni Projects" />
            <NewPage to="/about" title="Repos" />
            <FormControlLabel
              control={
                <Switch
                  onClick={toggleDarkMode}
                  value={theme.palette.type === 'dark'}
                />
              }
            />
          </NavBar>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </MuiThemeProvider>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
