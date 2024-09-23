const express = require("express");
const bookRouter = express.Router();
const {
  getAllBooks,
  createBook,
  getOneBook,
  deleteBook,
  updateBook,
} = require("./books.controller");

const upload = require("../middleware/mutler");

bookRouter.get("/books", getAllBooks);
bookRouter.post("/create", upload.single("image"), createBook);
bookRouter.get("/book/:id", getOneBook);
bookRouter.delete("/book/:id", deleteBook);
bookRouter.put("/book/:id", updateBook);

module.exports = bookRouter;
