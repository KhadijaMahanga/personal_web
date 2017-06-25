import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Services extends React.Component {
    render(){
        return(
           <section id="services">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12 text-center">
                           <h2 className="section-heading">Services</h2>
                           <h3 className="section-subheading text-muted">Here's what I do, and what I can offer you. So drop me a <Link to="/contact">message</Link></h3>
                       </div>
                   </div>
                   <div className="row text-center">
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Development Services</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Responsive Design</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Web Security</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                   </div>
                   <div className="row text-center">
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Development Services</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Responsive Design</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                       <div className="col-md-4">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Web Security</h4>
                           <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                       </div>
                   </div>
               </div>
           </section>
        );
     }
  }
