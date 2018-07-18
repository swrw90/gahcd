import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav/MainNav';
import PhotoGrid from './components/PhotoGrid/PhotoGrid';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <PhotoGrid />
      </div>
    );
  }
}

export default App;
