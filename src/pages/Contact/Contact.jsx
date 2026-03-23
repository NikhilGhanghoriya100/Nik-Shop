import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      {/* <form action="">
            <input type="text" placeholder='Enter Your Name...' name='username' />
            <input type="email" placeholder='Email' name='email' />
            <textarea name="message" placeholder='Messsage'></textarea>
            <button>Submit</button>
        </form> */}

      

      <form className="contact-form" action="https://formspree.io/f/xnjgypqv" method="POST">
        <h2>Get In Touch</h2>

        <div className="input-group">
          <input type="text" placeholder="Enter Your Name" name="username" required/>
        </div>

        <div className="input-group">
          <input type="email" placeholder="Email Address" name="email" required/>
        </div>

        <div className="input-group">
          <textarea name="message" placeholder="Your Message..." rows="5" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
