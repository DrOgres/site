import { Component } from "react";

/**
 * @description Creates a contact form component compatible with the Netlify platform's
 * form processing.  The component is stateful depending if it has been submitted or not
 *
 * @param {*} data all data encapsulated in the form as well as the state used in the encode arrow function
 * to encode the data from the form for processing
 *
 *
 * @returns either the form when the form has not been submitted this is a return early if statement
 * or a confimration and 'thank you' message if the form has been sucessfully submitted.
 */

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", submitted: false };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => this.setState({ submitted: true }))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (!this.state.submitted) {
      const { name, email, message } = this.state;
      return (
        <div className="content-group">
        <form onSubmit={this.handleSubmit} className="card flex-col nowrap auto-center">
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="name">Your Name:</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Your Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="email">Your Email:</label>
            </div>
            <div className="col-75">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Your Email Address"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="message">Message: </label>
            </div>
            <div className="col-75">
              <textarea
                name="message"
                id="message"
                value={message}
                placeholder="Some Details..."
                onChange={this.handleChange}
              />
            </div>
          </div>
          <p>
            <button className="raise" type="submit">Send</button>
          </p>
        </form>
        </div>
      );
    }

    return (
      <div className="deck-box">
      <div className="response card">
        <h4>Thanks for reaching out!</h4>
        <p>I will get back to you as soon as possible!</p>
      </div>
      </div>
    );
  }
}

export default ContactForm;
