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

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("getProblems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
  });
}

function updateProblem(req, res, next) {
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
