const Book = require('./book');

const getBookById = (id) => {
		const book = Book.findById(id);
		return book;
};

const getAllBooks = () => {
	const books = Book.find({});
    return books;
};

const createBook = (bookDetails) => {
	const book = Book.create(bookDetails);
    return book;
};

const removeBookById = (id) => {
	const removedBook = Book.findByIdAndRemove(id);
    return removedBook;
};

const updateBookById = (id, update) => {
	const updatedBook = Book.findByIdAndUpdate(id, update, { new: true });
    return updatedBook;
};

module.exports = {
	getBookById,
	getAllBooks,
	createBook,
	removeBookById,
	updateBookById,
};
