import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { HashRouter, Route, Link } from 'react-router-dom';

import theme from './constants/theme';
import NavBar from './components/NavBar';
import logo from './assets/logo.png';
import './App.css';
import { NewPage } from './components/NewPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <div>
          <NavBar>
            <Link to="/">
              <img src={logo} alt="logo" width="50" height="50" />
            </Link>
            <NewPage to="/" title="Home" />
            <NewPage to="/about" title="Projects" />
            <NewPage to="/about" title="Uni Projects" />
            <NewPage to="/about" title="Repos" />
          </NavBar>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </ThemeProvider>
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
