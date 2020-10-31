import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import ParticlesBg from 'particles-bg';

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
        <div>
        <div className="container pt-4 mt-5">
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
                <input className="form-control btn btn-success" type="submit" value="Send" />
                <div className="row pt-2">
                    <div className="col text-white text-center">Mobile: +8801927574610</div>
                </div>
            </form>
        </div>
        <ParticlesBg color="#1abc9c" num={100} type="cobweb" bg={true}/>
        </div>
    );
};

export default Contact;