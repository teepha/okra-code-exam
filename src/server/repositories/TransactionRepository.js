/* eslint-disable class-methods-use-this */
import autoBind from 'auto-bind';
import transactionData from '../database/transactionData';

class TransactionRepository {
  constructor() {
    this.transactionData = transactionData;
    autoBind(this);
  }

  async getTransactions() {
    try {
      const transaction = await this.transactionData;
      return transaction;
    } catch (error) {
      throw error;
    }
  }
}

export default TransactionRepository;
