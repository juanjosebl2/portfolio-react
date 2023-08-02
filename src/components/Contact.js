import React from 'react'
import './Contact.css';
import ima from '../assets/contact.jpg';
import { FcPodiumWithSpeaker } from "react-icons/fc";

export const Contact = () => {
    return (
        <div className="contactme">
            <div className='title-site'>
                <h2 className="title-contact">CONTACT ME <FcPodiumWithSpeaker/></h2>
            </div>
            <div className="contact-overlay"> 
                <img src={ima} alt="img-home" className="contact-image" />
                <div id="fcf-form">
                    <h3 className="fcf-h3">Contact me</h3>

                    <form id="fcf-form-id" className="fcf-form-class" method="post" action="contact-form-process.php">

                        <div className="fcf-form-group">
                            <label htmlFor="Name" className="fcf-label">Your name</label>
                            <div className="fcf-input-group">
                                <input type="text" id="Name" name="Name" className="fcf-form-control" required />
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Email" className="fcf-label">Your email address</label>
                            <div className="fcf-input-group">
                                <input type="email" id="Email" name="Email" className="fcf-form-control" required />
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Message" className="fcf-label">Your message</label>
                            <div className="fcf-input-group">
                                <textarea id="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000" required></textarea>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send Message</button>
                        </div>

                        <div className="fcf-credit" id="fcf-credit">
                            Simple HTML email form provided by &nbsp;
                            <a href="https://github.com" target="_blank" rel="noreferrer">JuanWEB</a>
                        </div>

                    </form>
                </div>
            </div>
            
        </div>
    )
}
