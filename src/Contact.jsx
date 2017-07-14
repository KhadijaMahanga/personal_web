import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class ContactForm extends React.Component {
    render(){
        return(
           <section id="contact">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading">Contact</h2>
                          <h3 className="section-subheading text-muted">Feel free to contact me for any of my services</h3>
                      </div>
                  </div>
                  {this.props.children}
              </div>
          </section>
        );
     }
  }
