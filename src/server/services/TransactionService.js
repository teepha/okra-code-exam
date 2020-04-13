import autoBind from 'auto-bind';
import TransactionRepository from '../repositories/TransactionRepository';

class TransactionService {
  constructor() {
    this.transactionRepository = new TransactionRepository();
    autoBind(this);
  }

  async fetchAllTransactions() {
    try {
      const allTransactions = await this.transactionRepository.getTransactions();
      return allTransactions;
    } catch (error) {
      throw error;
    }
  }
}

export default TransactionService;
