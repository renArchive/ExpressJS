const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  // static so it can be reached without the need of instantiate a new object
  static getAll() {
    return products;
  }
  
};