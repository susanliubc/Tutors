import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTutors, deleteTutor } from '../../actions/tutor';

export class Tutors extends Component {
  static propTypes = {
    tutors: PropTypes.array.isRequired,
    getTutors: PropTypes.func.isRequired,
    deleteTutor: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTutors();
  }

  render() {
    console.log('tutors', this.props.tutors);
    return (
      <Fragment>
        <h2>Tutors</h2>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.tutors.map(tutor => (
              <tr key={tutor.id}>
                <td>{tutor.id}</td>
                <td>{tutor.name}</td>
                <td>{tutor.email}</td>
                <td>{tutor.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteTutor.bind(this, tutor.id)}
                    className='btn btn-danger btn-sm'
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
  }
}

const mapStateToProps = state => ({
  tutors: state.tutors.tutors
});

export default connect(mapStateToProps, { getTutors, deleteTutor })(Tutors);
