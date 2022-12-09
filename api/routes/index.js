const productRouter = require('./product');

const route = (app) => {
  app.use('/api/product', productRouter);
}

module.exports = route;