import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    render(){
        return(
           <div>
              <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
                  <div className="container">
                      <div className="navbar-header page-scroll">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                          </button>
                          <a className="navbar-brand page-scroll" href="#page-top">Khadija Bhamiji Mahanga</a>
                      </div>
                      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right">
                              <li className="hidden">
                                 <a href="#page-top"></a>
                              </li>
                              <li><Link className="page-scroll" to="/services">Services</Link></li>
                              <li><Link className="page-scroll" to="/portfolio">Portfolio</Link></li>
                              <li><Link className="page-scroll" to="/about">About</Link></li>
                              <li><Link className="page-scroll" to="/blog">Blog</Link></li>
                              <li><Link className="page-scroll" to="/contact">Contact</Link></li>
                          </ul>
                      </div>
                  </div>
              </nav>
              {this.props.children}
              <footer>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4">
                              <span className="copyright">Copyright &copy; Khadija Mahanga 2017</span>
                          </div>
                          <div className="col-md-4">
                              <ul className="list-inline social-buttons">
                                  <li><a href="#"><i className="fa fa-twitter"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a>
                                  </li>
                                  <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                  </li>
                              </ul>
                          </div>
                          <div className="col-md-4">
                              <ul className="list-inline quicklinks">
                                  <li><a href="#">Privacy Policy</a>
                                  </li>
                                  <li><a href="#">Terms of Use</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </footer>
           </div>

        );
     }
  }
