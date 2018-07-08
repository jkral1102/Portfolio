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
        this.setState({ value: event.target.value });
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
                <form id='contactForm' onSubmit={this.handleSubmit}>
                    <label>
                        <span>name*</span>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        <span> email*</span>

                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        <span>how can i help?*</span>

                        <input id='contactMsg' type="text" value={this.state.value} onChange={this.handleChange}
                            placeholder='What sort of project do you have in mind that I can help with?' />
                    </label>

                    <input id='contactSubmit' type="submit" value="SEND" />
                </form>
            </div>
        );
    }
}

export default Contact;