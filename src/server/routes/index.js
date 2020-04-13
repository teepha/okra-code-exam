import { Router } from 'express';
import userRoutes from './users';
import transactionRoutes from './transactions';

const router = Router();

router.use('/', userRoutes);
router.use('/', transactionRoutes);

export default router;
