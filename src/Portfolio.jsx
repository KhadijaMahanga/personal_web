import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Portfolio extends React.Component {
    render(){
        return(
           <section id="portfolio" className="bg-light-gray">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading">Portfolio</h2>
                          <h3 className="section-subheading text-muted">Projects I have worked on so far</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/image-iol.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Independent Online</h4>
                              <p className="text-muted">Website Development</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/african-independent_rev.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>African Independent</h4>
                              <p className="text-muted">Website Development</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/flexi.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Employee Productivity Dashboard</h4>
                              <p className="text-muted">Business Analyst & System Development</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/BPMN.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Cemetry Booking Process- City of Cape Town</h4>
                              <p className="text-muted">Business Process Redesign/ ERP</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">

                              <img src="img/portfolio/cas.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Career Advisor System</h4>
                              <p className="text-muted">Software Development</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/effcommlogo.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Client Relationship Management Portal</h4>
                              <p className="text-muted">Software Development</p>
                          </div>
                      </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                          <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                              <img src="img/portfolio/analytics.png" className="img-responsive" alt="" />
                          </a>
                          <div className="portfolio-caption">
                              <h4>Personal Analytics</h4>
                              <p className="text-muted">Data visualization</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        );
     }
  }
