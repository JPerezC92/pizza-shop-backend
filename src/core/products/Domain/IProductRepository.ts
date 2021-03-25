import IProduct from './Interfaces/IProduct';
import Product from './Product';

interface IProductRepository {
  getAllProducts(): Promise<IProduct[]>;

  createProduct(product: Product): Promise<IProduct>;

  searchById(id: string): Promise<IProduct>;
}

export default IProductRepository;
