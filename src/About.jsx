import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    render(){
        return(
           <section id="about">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h2 className="section-heading">About Me!</h2>
                          <h3 className="section-subheading text-muted"> I am a software developer and an aspiring data scientist located in Dar-es-salaam, Tanzania. </h3>
                          <h3 className="section-subheading text-muted"> "Applying technology to create business solutions and solve social issues is exhilarating!". </h3>
                          <h3 className="section-subheading text-muted"> Learning everyday, with every encounter..Here's a road map to where I am and have a look at my <Link to="/portfolio">portfolio</Link>  for acquired skills and complishments so far </h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <ul className="timeline">
                              <li>
                                  <div className="timeline-image"></div>
                                  <div className="timeline-panel">
                                      <div className="timeline-heading">
                                          <h4>December 2014</h4>
                                          <h5 className="subheading">Graduated with a BSc in Computer Science</h5>
                                      </div>
                                      <div className="timeline-body">
                                          <p className="text-muted">
                                             Attained a degree in Computer Science and Business Computing from University of Cape Town.
                                          </p>
                                      </div>
                                  </div>
                              </li>
                              <li className="timeline-inverted">
                                  <div className="timeline-image"></div>
                                  <div className="timeline-panel">
                                      <div className="timeline-heading">
                                          <h4>December 2015</h4>
                                          <h5 className="subheading">Honours in Information Systems</h5>
                                      </div>
                                      <div className="timeline-body">
                                          <p className="text-muted">Finished a one year Honours course in Information Systems.</p>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className="timeline-image"></div>
                                  <div className="timeline-panel">
                                      <div className="timeline-heading">
                                          <h4>January 2016</h4>
                                          <h5 className="subheading">Joined Saratoga</h5>
                                      </div>
                                      <div className="timeline-body">
                                          <p className="text-muted">Joined a software company in Capetown, South Africa as a Technology Consultant, developer.</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="timeline-inverted">
                                  <div className="timeline-image"></div>
                                  <div className="timeline-panel">
                                      <div className="timeline-heading">
                                          <h4>July 2017</h4>
                                          <h5 className="subheading">Launched my career in Tanzania</h5>
                                      </div>
                                      <div className="timeline-body">
                                          <p className="text-muted">Working in Tanzania as a freelancer in information technology projects</p>
                                      </div>
                                  </div>
                              </li>
                              <li className="timeline-inverted">
                                  <div className="timeline-image">
                                      <h4>Be Part
                                          <br />Of My
                                          <br />Story!</h4>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
        );
     }
  }
