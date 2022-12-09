const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

const product = require('./api/product');

app.use('/api/product', product);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
