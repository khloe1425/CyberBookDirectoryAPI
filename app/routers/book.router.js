const express = require('express');

const bookRouter = express.Router();
const {getListBook,getDetailBook,deleteBook,updateBook,createBook} = require('../controllers/book.controller.js');

bookRouter.get('/',getListBook)
bookRouter.get('/:id',getDetailBook)
bookRouter.post('/',createBook)
bookRouter.put('/:id',updateBook)
bookRouter.delete('/:id',deleteBook)

module.exports = bookRouter;