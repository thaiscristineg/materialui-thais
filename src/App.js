import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Layout from './layout/Layout';
import './App.css';

const App = () => (
  <div className="body-wrap">  
    <Router>
      <Layout>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Layout>  
    </Router>
  </div>  
);


export default App;