import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_1widsaj', e.target, 'user_vgtzPG5OU7dSTqBbUmiki')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

         e.target.reset();
    }
    
    return (
        <div className="container">
            Contact Form
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;