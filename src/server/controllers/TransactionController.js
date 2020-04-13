import TransactionService from '../services/TransactionService';

class TransactionController {
  static async getAllTransactions(req, res, next) {
    try {
      const transactionService = new TransactionService();
      const transactions = await transactionService.fetchAllTransactions();
      return res.status(200).json({ data: transactions });
    } catch (error) {
      return next(error);
    }
  }
}

export default TransactionController;
