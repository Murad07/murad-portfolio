import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

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
        <div className="container pt-4">
            <form className="contact-form mx-auto" onSubmit={sendEmail}>
                <h2 className="text-center text-white">Get In Touch</h2>
                <div className="form-group">
                    <input type="hidden" name="contact_number" />
                    <label className="text-white">Name</label>
                    <input className="form-control" type="text" name="user_name" />
                </div>
                <div className="form-group">
                    <label className="text-white">Email</label>
                    <input className="form-control" type="email" name="user_email" />
                </div>
                <div className="form-group">
                    <label className="text-white">Subject</label>
                    <input className="form-control" type="text" name="subject" />
                </div>
                <div className="form-group">
                    <label className="text-white">Message</label>
                    <textarea className="form-control" name="message" />
                </div>
                <input className="form-control btn btn-info" type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;