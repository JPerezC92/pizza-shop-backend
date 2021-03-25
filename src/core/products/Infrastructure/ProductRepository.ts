import db from '../../shared/infrastructure/db';
import {
  BEGIN,
  COMMIT,
  ROLLBACK,
} from '../../shared/infrastructure/helper/transaction';
import Product from '../Domain/Product';
import IProductRepository from '../Domain/IProductRepository';
import IProduct from '../Domain/Interfaces/IProduct';

class ProductRepository implements IProductRepository {
  pool = new db().pool;

  getAllProducts = async (): Promise<IProduct[]> => {
    const client = await this.pool.connect();

    try {
      await client.query(BEGIN);
      const data = await client.query({
        text: 'SELECT * FROM products',
      });
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
      const data = await client.query({
        text:
          'INSERT INTO products (id, name, description, price) VALUES($1, $2, $3, $4) RETURNING *',
        values: product.toArray(),
      });
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

      const data = await client.query({
        text: 'SELECT * FROM products WHERE id=$1',
        values: [id],
      });
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
