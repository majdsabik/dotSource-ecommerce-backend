const ClassBase = require('../ClassBase');

class Coupon extends ClassBase {
  constructor(data) {
    super(data);
    this.code = data.code;
    this.value = data.value;
  }
}

module.exports = Coupon;
