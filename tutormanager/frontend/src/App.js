import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './components/layout/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className='container'></div>
    </Fragment>
  );
};

ReactDom.render(<App />, document.getElementById('app'));
