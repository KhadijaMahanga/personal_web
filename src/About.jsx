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
                          <h2 className="section-heading">I'm Khadija Bhamiji</h2>
                          <h3 className="section-subheading text-muted"> "Writing beautiful code combined with amazing design to create business solutions and solve social issues is exhilarating!". </h3>
                          <h3 className="section-subheading text-muted"> I am a software developer and an aspiring data scientist based in Dar-es-salaam, Tanzania. I hold a Bachelor of Science in Computer Science and honours in Information Systems.
                           I have experience in software application development and information systems management. I strive to create and improve software applications that solve problems and inform decisions.
                           I consider myself a learner. With ever changing technology, I never stop to learn!. Have a look at my <Link to="/portfolio">portfolio</Link>  for acquired skills and complishments so far
                           </h3>

                           <h3 className="section-subheading text-muted">Apart from coding, I enjoy reading & listening to qur-an and islamic talks, cooking, reading academic articles, and travelling. </h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-12">
                          <ul className="timeline">
                              <li>
                                  <div className="timeline-image"></div>
                                  <div className="timeline-panel">
                                      <div className="timeline-heading">
                                          <h4>August 2017</h4>
                                          <h5 className="subheading">Launched career in Tanzania</h5>
                                      </div>
                                      <div className="timeline-body">
                                          <p className="text-muted">
                                             After three years of software application development and Information Technology Management in Cape town South Africa, I am now commencing a career in the same field in Tanzania .
                                          </p>
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
