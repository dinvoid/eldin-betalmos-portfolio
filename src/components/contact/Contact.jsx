import React, { useRef, useState } from 'react';
import './contact.css'
import IMAGECONTACT from "../../assets/contac-me.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5z10vl3', 'template_yhjh9sp', form.current, 'l1jNu28necArOT9Td')
        .then((result) => {
            setFormData({
                user_name: '',
                user_email: '',
                message: ''
            });
            alert('Message sent')
        }, (error) => {
            console.log(error.text);
            console.log("message not sent");
        });
    };

    return (
        <section id="contact">
        <h5 id="">Contact Me</h5>
        <h2>Get in touch</h2>

        <div className="container contact-container">

            <div className="details content">
                <h3>Hi, Let's have a chat.</h3>
                <p>I'd love if you reached out to me.</p>
                <div className="image">
                <img src={IMAGECONTACT} alt="contact" />
                </div>  
            </div>
        
            <div className="details form">
                <h1>Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>Name</label>
                    <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Your email</label>
                    <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Your message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="6">
                    </textarea>
                </div>
                <div>
                    <input id="submit" type="submit" value="send"/>
                </div>  
              </form>
            </div>
        </div>
        </section>
    )
}

export default Contact
