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
//import Blog from './Blog'

ReactDOM.render(
   <Router history={browserHistory}>
      <Main>
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/services" component={Services}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Contact>
               <Route path="/contact" component={ContactForm} />
               <Route path="/contact-sucess" component={ContactSuccess} />
               <Route path="/contact-error" component={ContactError} />
            </Contact>
         </Switch>
      </Main>
   </Router>,
   document.getElementById('container')
);
