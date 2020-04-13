/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import CreditIcon from '../../assets/svg/redo2.svg';
import DebitIcon from '../../assets/svg/undo2.svg';
import { formatValue } from '../../utils/helpers';

const TransactionHistory = ({ transactions }) => (
  <div className="transaction-history">
    <p>Transactions History</p>

    <div className="transaction-history__wrapper">
      {transactions.map((transaction, index) => {
        const {
          title, type, date, amount
        } = transaction;

        return (
          <div className="card" key={index}>
            <div className="card__details">
              <div key={index} className="card__content card__details--main">
                <span>{title}</span>
                <span className={type === 'Credit' ? 'icon-green' : 'icon-red'}>
                  {formatValue(amount)}
                </span>
              </div>
              <div className="card__content card__details--sub">
                <span>{date}</span>
                <span>
                  <img
                    src={type === 'Credit' ? CreditIcon : DebitIcon}
                    alt="Transaction Icon"
                  />
                  <span className="type">{type}</span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default TransactionHistory;
