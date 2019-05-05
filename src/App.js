import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbutron from './components/Jumbutron';

function App() {
  return (
    <>
      <NavigationBar />
      <Jumbutron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
