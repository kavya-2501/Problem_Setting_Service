const { StatusCodes } = require("http-status-codes");
const BaseError = require("./Baseerror");

class NotImplemented extends BaseError {
  constructor(methodName) {
    super(
      "Unimplemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} not implemented`,
      {}
    );
  }
}

module.exports = NotImplemented;
