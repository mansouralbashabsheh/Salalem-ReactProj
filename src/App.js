import React, { Component } from 'react';
import './main.css';
import Footer from './Component/footer';
import Header from './Component/header';
import Main from './Component/main';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Main />
      <Footer />


        
      </div>
    );
  }
}

export default App;
