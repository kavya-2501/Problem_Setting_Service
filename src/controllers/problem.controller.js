const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");

const problemService = new ProblemService(new ProblemRepository());

function pingCheckController(req, res) {
  return res.json({ message: "Ping controller is up" });
}

async function addProblem(req, res, next) {
  try {
    console.log("incoming req body", req.body);
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a problem",
      error: {},
      data: newproblem,
    });
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

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully fetched all problems",
      error: {},
      data: response,
    });
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
