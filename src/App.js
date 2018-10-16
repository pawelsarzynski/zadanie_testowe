import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import About from './Components/About/About';
import SkiCams from './Components/SkiCams/SkiCams';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          route: 'About'
      }
  }
    
  onRouteChange = (route) => {
      this.setState({route: route})
  }
    
  render() {
    return (
      <div className="App">
        <Logo />
        <Navigation currentRoute={this.state.route} onRouteChange={this.onRouteChange} />
        { this.state.route === 'About' ? <About /> : (this.state.route === 'Contact' ? <Contact /> : <SkiCams />) }
        <Footer />
      </div>
    );
  }
}

export default App;
