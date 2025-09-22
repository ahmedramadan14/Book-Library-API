const fs = require('fs')
const express = require('express')
const BookControllers = require('../Controllers/BookControllers')
const router = express.Router();

router.param('id',BookControllers.chekId)

router.route('/')
  .post(BookControllers.validDatabody , BookControllers.createBook)
  .get(BookControllers.GetAllBooks)

router.route('/:id')
  .get(BookControllers.GetBookById)
  .patch(BookControllers.UpdateBook)
  .delete(BookControllers.DeleteBook)

module.exports = router;