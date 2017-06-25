import React from 'react';
import ReactDOM from 'react-dom';
//import Router from 'react-router';
// Import routing components{ HashRouter as Router, Route }
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Main from './Main'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Portfolio from './Portfolio'
import Blog from './Blog'

ReactDOM.render(
   <Router history={browserHistory}>
      <Main>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/services" component={Services}/>
         <Route path="/portfolio" component={Portfolio}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/blog" component={Blog}/>

      </Main>
   </Router>,
   document.getElementById('container')
);
