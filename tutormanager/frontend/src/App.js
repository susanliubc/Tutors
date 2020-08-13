import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './components/layout/Header';
import Dashboard from './components/tutors/Dashboard';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <div className='container'>
          <Dashboard />
        </div>
      </Fragment>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
