import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTutors, deleteTutor } from '../../actions/tutor';

const Tutors = ({ tutors, getTutors, deleteTutor }) => {
  useEffect(() => {
    getTutors();
  }, []);

  const handleDeleteTutor = id => deleteTutor(id);

  return (
    <Fragment>
      <h2>Tutor</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {tutors.map(tutor => (
            <tr key={tutor.id}>
              <td>{tutor.id}</td>
              <td>{tutor.name}</td>
              <td>{tutor.email}</td>
              <td>{tutor.message}</td>
              <td>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={handleDeleteTutor(tutor.id)}
                >
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tutors: state.tutors.tutors
});

Tutors.propTypes = {
  tutors: PropTypes.array.isRequired,
  getTutors: PropTypes.func.isRequired,
  deleteTutor: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTutors, deleteTutor })(Tutors);

// "dev": "webpack --mode development --watch ./tutormanager/frontend/src/index.js --output ./tutormanager/frontend/static/frontend/main.js",
