import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header welcomeText="Welcome to React"/>
          {this.props.children}
          <Footer date={new Date()}/>
        </div>
    );
  }
};

export default App;