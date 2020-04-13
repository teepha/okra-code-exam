/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import TransactionHistory from '../../components/TransactionHistory';
import { NavBar, NavModal } from '../../components/Navigation';
import { getAllTransactions } from '../../services/transactionsServices';

class Home extends React.Component {
  state = {
    openModal: false,
    transactions: [],
  };

  toggleModal = () => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  };

  componentDidMount() {
    this.props.allTransactions();
  }

  componentDidUpdate(prevProps) {
    const { transactions } = this.props;

    if (prevProps.transactions !== transactions) {
      this.setState({
        transactions: transactions.transactions,
      });
    }
  }

  render() {
    const { toggleModal, state } = this;
    const { openModal, transactions } = state;

    return (
      <div className="main-page">
        {openModal && (
          <div className="modal">
            <NavModal toggleModal={toggleModal} />
          </div>
        )}
        <div className="container">
          <div className="header-wrapper">
            <NavBar toggleModal={toggleModal} />
            <Header transactions={transactions} />
          </div>
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  allTransactions: () => dispatch(getAllTransactions()),
});

const mapStateToProps = ({ transactions }) => ({ transactions });

export default connect(mapStateToProps, mapDispatchToProps)(Home);
