import Product from '../Domain/Product';
import ProductRepository from '../Infrastructure/ProductRepository';
import UuidGenerator from '../../shared/domain/UuidGenerator';
import { NextFunction, Request, Response } from 'express';

class CreateProduct {
  repository = new ProductRepository();

  invoke = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const id = new UuidGenerator().generate();

    try {
      const { name, description, price } = req.body;
      const product = new Product(id, name, description, price);
      const result = await this.repository.createProduct(product);

      res.status(201).json({ error: false, payload: result });
    } catch (error) {
      next(error);
    }
  };
}

export default CreateProduct;
