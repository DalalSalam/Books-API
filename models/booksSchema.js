const { Schema, model } = require("mongoose");

const BooksSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const Book = model("Book", BooksSchema);
module.exports = Book;
