/* eslint-disable react/no-did-update-set-state */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import AppLogo from '../../assets/images/app-logo.png';
import BankLogo from '../../assets/images/bank-logo.png';
import CreditIcon from '../../assets/svg/redo2.svg';
import DebitIcon from '../../assets/svg/undo2.svg';
import ButtonWrapper from '../Button/Index';
import { sumValue, formatValue } from '../../utils/helpers';

class Header extends React.Component {
  state = {
    totalCredit: null,
    totalDebit: null,
    totalAmount: null,
  };

  componentDidUpdate(prevProps) {
    let sumCredit;
    let sumDebit;
    let creditTransactions = [];
    let debitTransactions = [];
    const { transactions } = this.props;

    const totalAmount = sumValue(transactions, 'amount');

    transactions.map((transaction) => {
      if (transaction.type === 'Debit') {
        debitTransactions = [...debitTransactions, transaction];
        sumDebit = sumValue(debitTransactions, 'amount');
      }
      if (transaction.type === 'Credit') {
        creditTransactions = [...creditTransactions, transaction];
        sumCredit = sumValue(creditTransactions, 'amount');
      }
    });

    if (prevProps.transactions !== transactions) {
      this.setState({
        totalAmount: formatValue(totalAmount),
        totalCredit: formatValue(sumCredit),
        totalDebit: formatValue(sumDebit)
      });
    }
  }

  render() {
    const { totalAmount, totalCredit, totalDebit } = this.state;

    return (
      <div className="header">
        <img src={AppLogo} className="header__logo" alt="Logo" />

        <div className="header__total-balance">
          <p>Total Balance</p>
          <h1>{totalAmount}</h1>
          <img src={BankLogo} className="bank-logo" alt="bank logo" />
        </div>

        <hr />

        <div className="total-balance-details">
          <div className="total-balance-details__credits">
            <p>Total Credits</p>
            <span>
              <img
                src={CreditIcon}
                className="transaction-icon"
                alt="credit icon"
              />
              <h2>{totalCredit}</h2>
            </span>
          </div>
          <div className="total-balance-details__debits">
            <p>Total Debits</p>
            <span>
              <img
                src={DebitIcon}
                className="transaction-icon"
                alt="debit icon"
              />
              <h2>{totalDebit}</h2>
            </span>
          </div>
        </div>

        <ButtonWrapper
          type="button"
          className="connect-button"
          buttonLabel="Connect Your Bank"
        />
      </div>
    );
  }
}

export default Header;
