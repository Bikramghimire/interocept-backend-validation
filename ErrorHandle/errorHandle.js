class ErrorHandler extends Error {
  constructor(message, type, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.type = type;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
