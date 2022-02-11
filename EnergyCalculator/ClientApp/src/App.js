import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { History } from './components/History';
import { Calculator } from './components/Calculator';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';   
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
          <div><ToastContainer/></div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/calculator' component={Calculator} />
            <Route path='/history' component={History} />
          </Switch>
      </Layout>
    );
  }
}
