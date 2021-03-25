import IProduct from './Interfaces/IProduct';

class Product implements IProduct {
  id: string;
  name: string;
  description: string;
  price: number;

  constructor(id: string, name: string, description: string, price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }

  toArray = (): [string, string, string, number] => {
    return [this.id, this.name, this.description, this.price];
  };
}

export default Product;
