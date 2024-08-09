const express = require('express');
const BookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', BookController.getAllBooks);

module.exports = router;