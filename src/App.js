import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  MuiThemeProvider,
  Switch,
  FormControlLabel,
  createMuiTheme,
  CssBaseline,
} from '@material-ui/core';
import { HashRouter, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import logoBlack from './assets/logo-main.png';
import logoWhite from './assets/logo-dark.png';
import './App.css';
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
