import { NextFunction, Request, Response } from 'express';
import ProductRepository from '../Infrastructure/ProductRepository';

class SearchAll {
  repository = new ProductRepository();

  invoke = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const result = await this.repository.getAllProducts();

      res.status(200).json({ error: false, payload: result });
    } catch (error) {
      next(error);
    }
  };
}

export default SearchAll;
