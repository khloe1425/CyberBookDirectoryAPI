const router = require('express').Router();
let bookStore = require('./books_dumb');
router.get('/books', (req, res) => {
    res.send(bookStore);
})
router.get('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = bookStore.find(p => p.isbn === id);
    if (!book) return res.status(404).send('book not found');
    res.send(book);
})
router.post('/books', (req, res) => {
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
    const oldBook = bookStore.find(p => p.isbn === isbn)
    if (oldBook) return res.send('book already have')
    const newBook = {
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
    };
    bookStore.push(newBook);
    res.send(newBook)
})

router.put('/books/:id', (req, res) => {
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
    const book = bookStore.find(p => p.isbn === id)
    if (!book) return res.send('Book dose not exit');

    const updatebook = (value, pre) => !value ? pre : value;

    const updateNewbook = {
        ...book,
        title: updatebook(title, book.title),
        isbn: updatebook(isbn, book.isbn),
        pageCount: updatebook(pageCount, book.pageCount),
        publishedDate: updatebook(publishedDate, book.publishedDate),
        thumbnailUrl: updatebook(thumbnailUrl, book.thumbnailUrl),
        shortDescription: updatebook(shortDescription, book.shortDescription),
        longDescription: updatebook(longDescription, book.longDescription),
        status: updatebook(status, book.status),
        authors: updatebook(authors, book.authors),
        categories: updatebook(categories, book.categories),
    }
    const oldBook = bookStore.findIndex(p => p.isbn === id);
    bookStore.splice(oldBook, 1, updateNewbook);

    res.send(updateNewbook);
})

router.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    let book = bookStore.find(p => p.isbn === id);
    if (!book) return res.status(404).send("Book not found");

    bookStore = bookStore.filter(p => p.isbn !== id);

    res.send("sucsses");
})
module.exports = router