import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import OfferHelp from './components/OfferHelp'
import GetHelp from './components/GetHelp'
import Home from './components/Home';
import ErrorPage from './components/404';

function App() {
  return (
    <>
      <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/offer-help" component={OfferHelp} />
                <Route path="/get-help" component={GetHelp} />
                <Route component={ErrorPage} />
      </Switch>
    </>    
  );
}

export default App;
