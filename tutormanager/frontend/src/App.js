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
        {/* <Header /> */}
        <h2>App Page</h2>
        {/* <div className='container'>
          <h3>App Title</h3>
          {/* <Dashboard /> 
        </div> */}
      </Fragment>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
