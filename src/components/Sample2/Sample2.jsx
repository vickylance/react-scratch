import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Sample2.style';

const Sample = ({ firstName = '', lastName = '' }) => {
  return <Title>Hi {`${firstName} ${lastName}`}!</Title>;
};

Sample.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

Sample.defaultProps = {
  firstName: '',
  lastName: '',
};

export default Sample;
