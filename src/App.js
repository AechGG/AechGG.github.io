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
import Home from './screens/Home';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [theme, toggleDarkMode] = useDarkMode(
    prefersDarkMode ? 'dark' : 'light'
  );

  const themeConfig = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={themeConfig}>
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

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </HashRouter>
    </MuiThemeProvider>
  );
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
