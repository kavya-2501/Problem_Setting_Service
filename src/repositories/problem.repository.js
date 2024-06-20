// all the queries to db are going to be written here

const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    const problems = await Problem.find({});
    return problems;
  }

  async getProblem(id) {
    const problem = await Problem.findById(id);
    return problem;
  }
}

module.exports = ProblemRepository;
