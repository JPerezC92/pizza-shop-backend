import { Router } from 'express';
import user from './routes/user.routes';
import products from './routes/products.routes';

const router = Router();

router.use('/user', user);
router.use('/products', products);

export default router;
