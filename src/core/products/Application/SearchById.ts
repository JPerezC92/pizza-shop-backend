import { NextFunction, Request, Response } from 'express';
import IProductRepository from '../Domain/IProductRepository';

class SearchById {
  // repository = new ProductRepository();
  _repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this._repository = repository;
  }

  invoke = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.params;
      const productInformation = await this._repository.searchById(id);

      res.status(200).json({ error: false, payload: productInformation });
    } catch (error) {
      next(error);
    }
  };
}

export default SearchById;
