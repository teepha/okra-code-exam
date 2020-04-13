/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import UserImage from '../../assets/images/user-profile.png';
import DashboardIcon from '../../assets/svg/dashboard-icon.svg';
import TransferIcon from '../../assets/svg/transfer.svg';
import CreditIcon from '../../assets/svg/credit-arrow.svg';
import DebitIcon from '../../assets/svg/debit-arrow.svg';
import SettingsIcon from '../../assets/svg/gear.svg';
import ArrowIcon from '../../assets/svg/sign-out-arrow.svg';
import { getUserDetails } from '../../services/userServices';

const navLinks = [
  {
    icon: DashboardIcon,
    title: 'Dashboard',
  },
  {
    icon: TransferIcon,
    title: 'Transfers',
  },
  {
    icon: CreditIcon,
    title: 'Credits',
  },
  {
    icon: DebitIcon,
    title: 'Debits',
  },
];

const otherLinks = [
  {
    icon: SettingsIcon,
    title: 'Settings',
  },
  {
    icon: ArrowIcon,
    title: 'Sign Out',
  },
];

class NavModal extends React.Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.props.fetchUserDetails();
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;

    if (prevProps.user !== user) {
      this.setState({
        user: user.user,
      });
    }
  }

  render() {
    const { toggleModal } = this.props;
    const { user } = this.state;

    return (
      <div className="navigation-nav">
        <div className="user-profile">
          <img src={UserImage} alt="User profile" />
          <div className="user-profile__user-name">
            <h3>{user.username}</h3>
            <p>{user.occupation}</p>
          </div>
          <span
            className="navigation-nav__close-icon"
            onClick={() => toggleModal()}
          />
        </div>

        <div className="navigation-nav__link">
          {navLinks.map((link, index) => {
            const { title, icon } = link;
            return (
              <div key={index}>
                <img
                  src={icon}
                  alt="Nav Link"
                  className="navigation-nav__icon"
                />
                <span>{title}</span>
              </div>
            );
          })}
        </div>

        <hr />

        <div className="navigation-nav__link">
          {otherLinks.map((link, index) => {
            const { title, icon } = link;
            return (
              <div key={index}>
                <img
                  src={icon}
                  alt="Nav Link"
                  className="navigation-nav__icon"
                />
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserDetails: () => dispatch(getUserDetails()),
});

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, mapDispatchToProps)(NavModal);
