import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, currentRoute }) => {
    if(currentRoute === 'About') {
        return (
          <nav>
            <p className="navigation active" onClick={() => onRouteChange('About')}>About us</p>
            <p className="navigation" onClick={() => onRouteChange('SkiCams')}>Skicams</p>
            <p className="navigation" onClick={() => onRouteChange('Contact')}>Contact</p>
          </nav>
        );
    } else if(currentRoute === 'SkiCams') {
        return (
          <nav>
            <p className="navigation" onClick={() => onRouteChange('About')}>About us</p>
            <p className="navigation active" onClick={() => onRouteChange('SkiCams')}>Skicams</p>
            <p className="navigation" onClick={() => onRouteChange('Contact')}>Contact</p>
          </nav>
        );
    } else if(currentRoute === 'Contact') {
        return (
          <nav>
            <p className="navigation" onClick={() => onRouteChange('About')}>About us</p>
            <p className="navigation" onClick={() => onRouteChange('SkiCams')}>Skicams</p>
            <p className="navigation active" onClick={() => onRouteChange('Contact')}>Contact</p>
          </nav>
        );
    }
}

export default Navigation;