let bookStore = require('../data/books_dumb.js');

const getList = () => {
    if (bookStore) {
        return bookStore;
    }
    else {
        return false;
    }
}
const getDetail = (id) => {
    let book = bookStore.find(p => p.isbn === id);
    if (book) {
        return book;
    }
    else {
        return false;
    }
}
const create = (title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories) => {
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
    }
    const oldBook = bookStore.find(p => p.isbn === isbn)
    if (oldBook) return false;
    bookStore.push(newBook);
    return newBook;
}
const update = (id, title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories) => {
    const book = bookStore.find(p => p.isbn === id)
    if (!book) return false;
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
    return updateNewbook;

}
const deleteById = (id) => {
    let book = bookStore.find(p => p.isbn === id);
    if (!book) return false;
    else {
        bookStore = bookStore.filter(p => p.isbn !== id);
        return book;
    }

}
module.exports = {
    getList,
    getDetail,
    deleteById,
    create,
    update
}