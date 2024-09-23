const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./database");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");
const booksRouter = require("./api/books.routes");

//init
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//books routes
app.use("/api/books", booksRouter);

//not found handler
app.use(notFoundHandler);
//error handler
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on posrt ${PORT}`);
});
