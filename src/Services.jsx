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
                       <div className="col-md-3">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-code fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Application Development</h4>
                           <p className="text-muted">Offering developmet services for both mobile, desktop and web applications with best fit programming language, tools and framework. Utilising the principles of Agile Software development embracing client's requirements change and predictable cost schedule delivery </p>
                       </div>
                       <div className="col-md-3">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Website Development</h4>
                           <p className="text-muted">Building and deploying robust and reponsive website using current tools and techniques, interactive User Interfaces such as React library and search engine optimized website adhering to latest practices for better visibilty of your content.</p>
                       </div>
                       <div className="col-md-3">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-cogs fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Business Process Integration with ERP</h4>
                           <p className="text-muted">Assisting ERP systems integration to business such as SAP, Oracle. By customising the system if needed, identifying key master data, mapping your process to ERP transactions, identifying key integration points in your business process cycle and much more.</p>
                       </div>
                       <div className="col-md-3">
                           <span className="fa-stack fa-4x">
                              <i className="fa fa-circle fa-stack-2x text-primary"></i>
                              <i className="fa fa-database fa-stack-1x fa-inverse"></i>
                           </span>
                           <h4 className="service-heading">Data Analytics</h4>
                           <p className="text-muted">Performing data analysis for small business commencing with data mining process, to modelling and visualization. Available to join an analytics team for large organisation.</p>
                       </div>
                   </div>
               </div>
           </section>
        );
     }
  }
