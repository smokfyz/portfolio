import React, { Component } from 'react'
import './Contact.scss'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact Me</h1>
                <div className="contacts">
                    <ul>
                        <li><i className="icon i-email" />ivansharapenkov@gmail.com</li>
                        <li><i className="icon i-skype" />smokfyz</li>
                        <li><i className="icon i-vk" />vk.com/ivansharapenkov</li>
                    </ul>
                </div>
                <div className="send-email">
                    <form>
                        <label>
                            Name
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Email
                            <input type="text" name="email" />
                        </label>
                        <label>
                            Message
                            <textarea name="message" />
                        </label>
                        <label>
                            <input type="submit" value="SEND" />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact