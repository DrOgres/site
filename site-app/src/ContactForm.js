import React, { useState } from "react";



const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
  

    if (submitted) {
        return (
            <>
                <h2>Thank you!</h2>
                <div>We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form name="contact" method="POST" data-netlify="true">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
           
            <p>
                <label>Tell me about it: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    );
};

export default ContactForm;