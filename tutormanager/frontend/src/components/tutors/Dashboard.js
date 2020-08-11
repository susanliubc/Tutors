import React, { Fragment } from 'react';
import Tutors from './Tutors';
import Form from './Form';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Tutors />
    </Fragment>
  );
}
