const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).json({ msg: 'Welcome to the ContactKeeper API...' }),
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
