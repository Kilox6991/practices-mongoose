const Book = require('./book');

const bookByTitle = (title) => {
	const book = Book.findOne({title})
	return book
};

const booksByGenre = async (genreId) => {
	const book = await Book.find.toString({genreId})
	return book
};

const booksByPageCount = (maxPageCount, minPageCount) => {
	const books = Book.find({
		pageCount: { $gte: minPageCount, $lte: maxPageCount }
	  });
	  return books
};

const fullBookById = (id) => {};

const allBooksByLatest = (fieldsToSelect) => {};

const addSimilarBooks = (bookId, similarBooks) => {};

module.exports = {
	bookByTitle,
	booksByGenre,
	booksByPageCount,
	fullBookById,
	allBooksByLatest,
	addSimilarBooks,
};
