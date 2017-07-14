import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Thank extends React.Component {
    render(){
      if(this.props.params.message === "thankyou") {
         return(
           <div className="">
               <div className="intro-text">
                  <div className="intro-lead-in">Thank you! I will get in touch soon.</div>
                  <Link to="/services" className="page-scroll btn btn-xl">Click</Link>
               </div>
           </div>
        );
     } else {
        return(
           <div className="intro-text">
               <div className="intro-lead-in">There has been an error, please try again!</div>
               <Link to="/services" className="page-scroll btn btn-xl">Click</Link>
            </div>
         );
      }
    }
  }
