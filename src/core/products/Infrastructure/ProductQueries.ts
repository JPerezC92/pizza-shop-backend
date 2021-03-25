import { PoolClient, QueryResult } from 'pg';
import Product from '../Domain/Product';

class ProductQuerys {
  getAllProducts = async (client: PoolClient): Promise<QueryResult> => {
    const data = await client.query({
      text: 'SELECT * FROM products',
    });
    return data;
  };

  createProduct = async (
    client: PoolClient,
    product: Product
  ): Promise<QueryResult> => {
    const data = await client.query({
      text:
        'INSERT INTO products (id, name, description, price) VALUES($1, $2, $3, $4) RETURNING *',
      values: product.toArray(),
    });
    return data;
  };

  searchById = async (client: PoolClient, id: string): Promise<QueryResult> => {
    const data = await client.query({
      text: 'SELECT * FROM products WHERE id=$1',
      values: [id],
    });
    return data;
  };
}

export default ProductQuerys;
