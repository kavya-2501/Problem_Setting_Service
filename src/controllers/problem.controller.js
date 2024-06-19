const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");

function pingCheckController(req, res) {
  return res.json({ message: "Ping controller is up" });
}

function addProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

module.exports = {
  pingCheckController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
