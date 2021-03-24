const ClassBase = require('../ClassBase');

class Cart extends ClassBase {
  constructor(data) {
    super(data);
    this.products = data.products;
    this.coupons = data.coupons;
    this.subTotal = data.subTotal;
    this.discount = data.discount;
    this.vat = data.vat;
    this.total = data.total;
  }
}

module.exports = Cart;
