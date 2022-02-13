module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 400;
  err.message = err.message || "Internal server error";
  err.type = err.type || "not know";

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
    type: err.type,
  });
};
