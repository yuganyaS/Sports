import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.js';
import Home from './views/Home.js';
import Error from './views/Error.js';
import './index.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch,Redirect} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Layout>
    {/* Router keeps your UI and the URL in sync. */}
    <Router>
      {/* link is works like a anchor tag but this will active when the route is active and that automatically
          apply activeClassName and activeStyle when given either prop.
      */}
      {/* switch  will check the exact url matches then link to that url
          if we use exact then that will check only mentioned path satisfies otherwise it will satisfy path starts with
          (eg. without use exact => '/' - accept both /404 and / route to the same home component
          if we use exact => '/' - accept only / route to home component)
      */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route path="/404" component={Error} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  </Layout>
  , document.getElementById('root')
);
registerServiceWorker();
