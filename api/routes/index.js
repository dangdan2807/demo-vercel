const productRouter = require('./product');

const route = (app) => {
  app.use('/product', productRouter);
}

module.exports = route;