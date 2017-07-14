import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class ContactSuccess extends React.Component {
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
            </div>
         </section>
     );
    }
  }
