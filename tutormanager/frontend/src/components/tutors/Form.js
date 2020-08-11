import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = () => {
  const [info, setInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => setInfo({ [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault;
    console.log('submit');
  };

  const { name, email, message } = info;
  return (
    <div className='card card-body mt-4 mb-4'>
      <h2>Add Tutor</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Name</label>
          <input
            type='text'
            name='message'
            className='form-control'
            value={message}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {};

export default Form;
