const Cart = require('./cart.model');
const { findProductById } = require('../product/product.repository');

const findCartById = async id => {
  return await Cart.findOne({ _id: id }).populate({
    path: 'products.productId',
  });
};
const getAllCarts = async () => {
  return await Cart.find();
};
const getCart = async () => {
  const result = await Cart.findOne().populate({
    path: 'products.productId',
  });
  if (!result) {
    const cart = { products: [], couponsId: [] };
    return await Cart.create(cart);
  }
  return result;
};
const createCart = async cart => {
  return await Cart.create(cart);
};
const updateCart = async (id, data) => {
  return await Cart.updateOne({ _id: id }, data);
};
const deleteCart = async id => {
  return await Cart.deleteOne({ _id: id });
};

const getPricesFromListOfProducts = async products => {
  try {
    return await Promise.all(
      products.map(async product => {
        const found = await findProductById(product.productId);
        return found.price * product.qtd;
      })
    );
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCarts,
  getCart,
  findCartById,
  createCart,
  updateCart,
  deleteCart,
  getPricesFromListOfProducts,
};
