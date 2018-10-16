import React from 'react';
import './Contact.css';

const Contact = () => {    
    return (
        <main className="register">
          <form className="box">
              <input type="text" placeholder="Name*" name="name" className="req" required /><br />
              <input type="email" placeholder="Email*" name="mail" className="req" required />
            <br /><br />
            <input type="text" placeholder="Message" name="message" /><br />
        
            <button type="submit" className="sendbtn">SEND</button>
          </form>
        </main>
    );
}

export default Contact;