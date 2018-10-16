import React from 'react';
import logoimg from './logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
          <img src={ logoimg } alt="Logo" />
        </div>
    );
}

export default Logo;