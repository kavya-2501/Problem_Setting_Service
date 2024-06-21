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

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched the problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblemById(req, res, next) {
 try {
  const problemId=req.params.id;
  const response=await problemService.deleteProblemById(problemId);
  return res.status(StatusCodes.OK).json({
    success:true,
    message:"Successfully deleted ",
    error:{},
    data:response
  })
 } catch (error) {
  next(error)
 }
}

async function updateProblemById(req, res, next) {
 try {
  const problemid=req.params.id;
  const updatedproblem=await problemService.updateProblemById(problemid,req.body);
  return res.status(StatusCodes.OK).json({
    success:true,
    message:"Succesfully updated the problem",
    error:{},
    data:updatedproblem
  })
 } catch (error) {
  next(error)
 }
}

module.exports = {
  pingCheckController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblemById,
  updateProblemById,
};
