import DB from '../../shared/infrastructure/DB';
import {
  BEGIN,
  COMMIT,
  ROLLBACK,
} from '../../shared/infrastructure/helper/transaction';
import Product from '../Domain/Product';
import IProductRepository from '../Domain/IProductRepository';
import IProduct from '../Domain/Interfaces/IProduct';
import ProductQueries from './ProductQueries';

class ProductRepository implements IProductRepository {
  productQueries = new ProductQueries();
  pool = new DB().pool;

  getAllProducts = async (): Promise<IProduct[]> => {
    const client = await this.pool.connect();

    try {
      await client.query(BEGIN);
      const data = await this.productQueries.getAllProducts(client);
      await client.query(COMMIT);

      return data.rows;
    } catch (e) {
      await client.query(ROLLBACK);
      throw e;
    } finally {
      client.release();
    }
  };

  createProduct = async (product: Product): Promise<IProduct> => {
    const client = await this.pool.connect();

    try {
      await client.query(BEGIN);
      const data = await this.productQueries.createProduct(client, product);

      await client.query(COMMIT);

      return data.rows[0];
    } catch (e) {
      client.query(ROLLBACK);
      throw e;
    } finally {
      client.release();
    }
  };

  searchById = async (id: string): Promise<IProduct> => {
    const client = await this.pool.connect();

    try {
      await client.query(BEGIN);

      const data = await this.productQueries.searchById(client, id);
      await client.query(COMMIT);

      return data.rows[0];
    } catch (e) {
      await client.query(ROLLBACK);
      throw e;
    } finally {
      client.release();
    }
  };
}

export default ProductRepository;
