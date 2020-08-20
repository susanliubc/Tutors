import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withAlert } from 'react-alert';

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(`Email: ${error.msg.non_field_errors.join()}`);
      if (error.msg.username)
        alert.error(`Email: ${error.msg.username.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.addTutor) alert.success(message.addTutor);
      if (message.deleteTutor) alert.success(message.deleteTutor);
      if (message.passwordNotMatch) alert.success(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment></Fragment>;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
