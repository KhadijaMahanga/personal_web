import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class ContactSuccess extends React.Component {
    render(){
      return(
         <div className="row">
            <div className="col-lg-12">
               <header>
                  <div className="intro-text">
                     <div className="intro-lead-in">Thank you! I will get in touch soon.</div>
                     <Link to="/" className="page-scroll btn btn-xl">Home</Link>
                  </div>
               </header>
            </div>
         </div>
     );
    }
  }
