/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ toggleModal }) => (
  <div
    className="navigation-icon"
    onClick={() => {
      toggleModal();
    }}
  >
    <div className="navigation-icon__bar top-bar" />
    <div className="navigation-icon__bar" />
    <div className="navigation-icon__bar bottom-bar" />
  </div>
);

NavBar.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default NavBar;
