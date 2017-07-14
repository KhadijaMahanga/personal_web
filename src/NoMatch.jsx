import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Redirect, browserHistory } from 'react-router-dom';

export default class NoMatch extends React.Component {
    render(){
      return(
         <section id="error">
            <div className="row">
               <div className="col-lg-12">
                  <div className="intro-text">
                     <div className="intro-lead-in">Oops, there's no page here!</div>
                     <Link to="/" className="page-scroll btn btn-xl">Return Home</Link>
                  </div>
               </div>
            </div>
            <Redirect to={{pathname: '/404'}}/>
         </section>
     );
    }
  }
