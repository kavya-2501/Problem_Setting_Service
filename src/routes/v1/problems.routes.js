const express = require("express");

const { ProblemController } = require("../../controllers/index");

const problemRouter = express.Router();

problemRouter.get("/ping", ProblemController.pingCheckController);

problemRouter.get("/:id", ProblemController.getProblem);

problemRouter.get("/", ProblemController.getProblems);

problemRouter.post("/", ProblemController.addProblem);

problemRouter.delete("/:id", ProblemController.deleteProblemById);

problemRouter.put("/:id", ProblemController.updateProblemById);

module.exports = problemRouter;
