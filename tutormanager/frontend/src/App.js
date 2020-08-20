import React, { Fragment, Component } from 'react';
import ReactDom from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './components/layout/Header';
import Dashboard from './components/tutors/Dashboard';
import Alerts from './components/layout/Alerts';
import Register from './components/accounts/Register';
import Login from './components/accounts/Login';
import PrivateRoute from './components/common/PrivateRoute';
import { loadUser } from './actions/auth';

import store from './store';
import { Provider } from 'react-redux';

//Alert options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className='container'>
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
