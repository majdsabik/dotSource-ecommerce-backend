# dotSource code challenge
This is the backend for the code challenge from dotSource.
## Installation
Use the package manager or your choice ([yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/package/homepage)) to install it.  
Using yarn:
```bash
yarn
```
Using npm:
```bash
npm install
```
## .env file  
The server requires an .env file that looks like this:
```bash
PORT='Port number'
ENV=development
MONGO_URI='Link to MongoDB database'
```
## Usage
After the installation finishes, use the following command to start the server:  
Using yarn:
```bash
yarn start
```
Using npm:
```bash
npm start
```
## Testing
Use the following command to start the tests:  
Using yarn:
```bash
yarn test
```
Using npm:
```bash
npm test
```
## API Routes:
### Cart Routes:
```bash
POST('/cart')
```
Body example:
```bash
{
	"products": [],
	"couponsId": []
}
```
Used to create a cart.
```bash
GET('/cart')
```
Body example:
```bash
Not required
```
Used to view all carts.
```bash
GET('/cart/:id')
```
Body example:
```bash
Not required
```
Used to view a specific cart.
```bash
PUT('/cart/:id')
```
Body example:
```bash
{
	"products": [],
	"couponsId": []
}
```
Used to update a specific cart.
```bash
DELETE('/cart/:id')
```
Body example:
```bash
Not required
```
Used to delete a specific cart.
### Coupon Routes:
```bash
GET('/coupon/:code')
```
Body example:
```bash
Not required
```
Used to view a specific coupon.
```bash
POST('/coupon')
```
Body example:
```bash
{
	"code": "Free",
	"value": 50
}
```
Used to create a coupon.
### Product Routes:
```bash
GET('/product')
```
Body example:
```bash
Not required
```
Used to view all products.
```bash
GET('/product/:id')
```
Body example:
```bash
Not required
```
Used to view a specific product.
```bash
POST('/product')
```
Body example:
```bash
{
	"name": "iPhone 12 Pro",
	"description": "Apple iPhone 12 Pro 128 GB",
	"price": 1120
}
```
Used to create a product.
## Frontend installation:
The frontend of this project can be found [here](https://github.com/majdsabik/dotSource-ecommerce-frontend).