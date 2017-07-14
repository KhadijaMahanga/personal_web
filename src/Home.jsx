import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render(){
        return(
           <header>
              <div className="container">
                  <div className="intro-text">
                      <div className="intro-heading">Hi, I'm Khadija Bhamiji.</div>
                      <div className="intro-lead-in">A Software Developer & An aspiring Data Scientist!</div>
                      <Link to="/services" className="page-scroll btn btn-xl">What I do</Link>
                  </div>
              </div>
          </header>
        );
     }
  }
