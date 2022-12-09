const express = require('express');
const app = express();
const routes = require('./api/routes/index');
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 8080;
routes(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
