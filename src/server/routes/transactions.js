import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';

const router = Router();

router.get('/transactions', TransactionController.getAllTransactions);

export default router;
