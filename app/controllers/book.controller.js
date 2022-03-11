const { getList, getDetail, deleteById, create,update } = require('../services/book.service.js');
const getListBook = (req, res) => {
    const listBook = getList();
    if (listBook) {
        res.status(200).send(listBook);
    }
    else {
        res.status(404).send("Not Found!");
    }
}
const getDetailBook = (req, res) => {
    const { id } = req.params;
    const book = getDetail(id);
    if (book) {
        res.status(200).send(book);
    }
    else {
        res.status(404).send("not found");
    }
}
const createBook = (req, res) => {
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories
    } = req.body;
    const newBook = create(title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories);
    if (newBook) {
        res.status(201).send(newBook);
    }
    else {
        res.send('book already have')
    }

}

const updateBook = (req, res) => {
    const { id } = req.params;
    const {
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
    } = req.body;
    const bookUpdated = update(id, title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories);
    if (bookUpdated) {
        res.status(200).send(bookUpdated);
    }
    else {
        res.status(404).send("Book dose not exit");
    }
}
const deleteBook = (req, res) => {
    const { id } = req.params;
    const bookDeleted = deleteById(id);
    if (bookDeleted) {
        res.status(200).send(bookDeleted);
    }
    else {
        res.status(404).send("not found");
    }
}

module.exports = {
    getListBook,
    getDetailBook,
    deleteBook,
    createBook,
    updateBook
}