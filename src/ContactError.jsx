import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class ContactError extends React.Component {
    render(){
        return(
           <div className="row">
               <div className="col-lg-12">
                  <header>
                      <div className="intro-text">
                         <div className="intro-lead-in">Oops! There has been an error, please try again.</div>
                         <Link to="/contact" className="page-scroll btn btn-xl">Contact</Link>
                     </div>
                 </header>
            </div>
         </div>
         );
    }
  }
