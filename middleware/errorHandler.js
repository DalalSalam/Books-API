const errorHandler = (error, request, response, next) => {
  try {
    return response
      .status(error.status || 500)
      .json({ error: error || "Interval Server Error" });
  } catch (error) {
    next(error);
  }
};

module.exports = errorHandler;
