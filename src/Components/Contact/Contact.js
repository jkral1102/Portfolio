import React, { Component } from 'react';
import './Contact.css';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactInfo: "I seek to help individuals, businesses, and organizations from around the world bring their projects to life. I'd love to help you too."
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ subject: event.target.value });
    }
    handleBodyChange = (event)=>{
        this.setState({ body: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {

        return (
            <div id='contactDiv'>
                <div id='contactHeader'>Let's Talk</div>
                <div id='contactInfo'>{this.state.contactInfo}</div>
                <form id='contactForm' action="mailto:jkral1101@gmail.com" method="GET">
                    <label>
                        <span>name*</span>
                        <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
                    </label>

                    {/*<label>
                        <span> email*</span>

                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>*/}

                    <label>
                        <span>how can i help?*</span>

                        <textarea id='contactMsg' name="body" type="text" value={this.state.body} onChange={this.handleBodyChange}
                            placeholder='What sort of project do you have in mind that I can help with?' />
                    </label>

                    <input id='contactSubmit' type="submit" value="SEND" />
                </form>
            </div>
        );
    }
}

export default Contact;