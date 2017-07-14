import React from 'react';
import ReactDOM from 'react-dom';
//import Router from 'react-router';
// Import routing components{ HashRouter as Router, Route }
import { BrowserRouter as Router, Switch, Route, browserHistory } from 'react-router-dom';

import Main from './Main'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Portfolio from './Portfolio'
import ContactSuccess from './ContactSuccess'
import ContactError from './ContactError'
import ContactForm from './ContactForm'
import NoMatch from './NoMatch'
//import Blog from './Blog'

ReactDOM.render(
   <Router history={browserHistory}>
      <Main>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/contact-success' component={ContactSuccess}></Route>
            <Route path='/contact-error' component={ContactError}></Route>
            <Route component={NoMatch}/>
         </Switch>
      </Main>
   </Router>,
   document.getElementById('container')
);
