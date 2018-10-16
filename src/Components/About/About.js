import React from 'react';
import img1 from './1.PNG';
import img2 from './2.PNG';
import img3 from './3.PNG';
import './About.css';

const About = () => {
    return (
        <main className="about">
          <div className="aboutUs">
            <img src={img1} alt="No img" />
            <h3>Lorem Ipsum</h3>
            <p>dolor sit amet, ad sea falli albucius, has in zril civibus molestiae.</p>
          </div>
          <div className="aboutUs">
            <img src={img2} alt="No img" />
            <h3>Lorem Ipsum</h3>
            <p>dolor sit amet, ad sea falli albucius, has in zril civibus molestiae.</p>
          </div>
          <div className="aboutUs">
            <img src={img3} alt="No img" />
            <h3>Lorem Ipsum</h3>
            <p>dolor sit amet, ad sea falli albucius, has in zril civibus molestiae.</p>
          </div>
        </main>
    );
}

export default About;