import React from "react";


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}



class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", submitted: false }
    }


    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => this.setState({ submitted: true }))
            .catch(error => alert(error));

        e.preventDefault();
    };


    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.state.submitted) {
            return (
                <div className="response">
                    <h4>Thanks for reaching out!</h4>
                    <p>I will get back to you as soon as possible!</p>
                </div>
            );
        }

        if (!this.state.submitted) {
            const { name, email, message } = this.state;
            return (
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                            Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message: <textarea name="message" value={message} onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            );
        }
    }
};

export default ContactForm;