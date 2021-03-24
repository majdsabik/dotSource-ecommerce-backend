const ClassBase = require('../ClassBase');

class Product extends ClassBase {
  constructor(data) {
    super(data);
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
  }
}

module.exports = Product;
