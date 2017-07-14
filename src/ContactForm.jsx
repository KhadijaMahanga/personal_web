import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class ContactForm extends React.Component {
    render(){
        return(
            <div className="row">
                <div className="col-lg-12">
                    <form name="contactForm" id="contactForm" method="POST" action="/contact" encType="text/plain">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" name="name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" name="email" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" placeholder="Your Phone *" id="phoneNumber" name="phoneNumber" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Your Message *" id="message" name="message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>

                            <div className="col-lg-12 text-center">
                                <div id="success"></div>
                                <input id="submitbutton" type="submit" value="Send Message" className="btn btn-xl"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
     }
  }
