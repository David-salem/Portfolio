import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export const Contact = () => {
    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const form = useRef();

    const handleSubmit = (e) => {
        setLoader(true);
        e.preventDefault();

        emailjs.sendForm("service_cn8916q", "template_6pe5cpa", form.current, "_dHKUxkDWEQ45ca8T")
            .then(() => {
                setMessage("Your request was successfully submitted.");
                setLoader(false);                
                e.target.reset();
            })
            .catch((error) => {
                setLoader(false);
                setError(error);
                e.target.reset();
            })
    }

    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact_details">Don't like forms? Send me an email. 👋🏼</p>
                </div>

                <form ref={form} className="contact_form" onSubmit={handleSubmit}>
                    <div className="contact_form-group">
                        <div className="contact_form-div">
                            <input 
                                type="text" 
                                className="contact_form-input" 
                                placeholder="Insert your name."
                                name="user_name"
                                required
                            />
                        </div>

                        <div className="contact_form-div">
                            <input 
                                type="email" 
                                className="contact_form-input" 
                                placeholder="Insert your email."
                                name="user_email"
                                required
                            />
                        </div>
                    </div>

                        <div className="contact_form-div">
                            <input 
                                type="text" 
                                className="contact_form-input" 
                                placeholder="Insert your subject."
                                name="subject"
                                required
                            />
                        </div>

                        <div className="contact_form-div contact_form-area">
                            <textarea 
                                id="" 
                                cols="30" 
                                rows="10" 
                                className="contact_form-input" 
                                placeholder="Write your message."
                                name="message"
                                required
                            ></textarea>

                        </div>

                        { loader ? 
                            <div className="loader-contact"><CircularProgress /></div> 
                            :
                            <button className="btn btn_textarea">Send Message</button>
                        }

                        {message && <Alert severity="success" className="message-contact">{message}</Alert>}
                        {error && <Alert severity="error" className="message-contact">{error}</Alert>}
                </form>
            </div>
        </section>
    )
}
