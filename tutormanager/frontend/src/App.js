import React, { Fragment } from 'react';
import ReactDom from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './components/layout/Header';
import Dashboard from './components/tutors/Dashboard';
import Alerts from './components/layout/Alerts';
import store from './store';
import { Provider } from 'react-redux';

//Alert options
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

const App = () => {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className='container'>
            <Dashboard />
          </div>
        </Fragment>
      </AlertProvider>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
