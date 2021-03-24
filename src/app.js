require('dotenv').config();
const express = require('express');
const Cors = require('cors');

const dbConnection = require('./configs/db.config');
const app = express();
const couponRoutes = require('./api/coupon/coupon.routes');
const productRoutes = require('./api/product/product.routes');
const cartRoutes = require('./api/cart/cart.routes');

const connectToMongo = async () => await dbConnection();
connectToMongo();

app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(couponRoutes);
app.use(productRoutes);
app.use(cartRoutes);

//Handle errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});
