const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  try {
    res.json({ msg: 'Product route' });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  }
});

module.exports = router;