import { Router } from 'express';
import product from '../../core/products/Application';

const products = Router();

products.get('/', product.searchAll);

products.post('/', product.create);

products.get('/:id', product.searchById);

export default products;
