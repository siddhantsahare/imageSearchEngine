import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <div className="container" style={{ margin: '0 50px' }}>
          <div>
            <Search />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
