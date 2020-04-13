/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, className, buttonLabel } = props;
  return (
    <button type={type} className={className}>
      {buttonLabel}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default Button;
