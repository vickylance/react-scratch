import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UsernameForm = ({ updateUsername }) => {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const usernameId = 'username';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.username.value;
    setStatus('pending');
    try {
      await updateUsername(newUsername);
      setStatus('fulfilled');
    } catch (err) {
      setStatus('rejected');
      setError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={usernameId}>
          Username
          <input type="text" id={usernameId} />
        </label>
      </div>
      <button type="submit">Submit</button>
      <span>{status === 'pending' ? 'Saving...' : null}</span>
      <span>{status === 'rejected' ? error.message : null}</span>
    </form>
  );
};

UsernameForm.propTypes = {
  updateUsername: PropTypes.func.isRequired,
};
UsernameForm.defaultProps = {};

export default UsernameForm;
