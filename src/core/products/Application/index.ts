import ProductRepository from '../Infrastructure/ProductRepository';
import CreateProduct from './Create';
import SearchAll from './SearchAll';
import SearchById from './SearchById';

const index = {
  create: new CreateProduct().invoke,
  searchAll: new SearchAll().invoke,
  searchById: new SearchById(new ProductRepository()).invoke,
};

export default index;
