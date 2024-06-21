// all the queries to db are going to be written here
const logger = require("../config/logger.config");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

// here the entries are created in the database   (mongoose codes)
// here we have the crud for mongodb, suppose in future we have to add for mysql, we only have to change code here and services won't be affected.


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

  async deleteProblemById(id) {
    const problemId=await Problem.findByIdAndDelete(id);
    if(!problemId){
      logger.error(`Problem_Repository: Problem with id: ${id} not found in the db`)
      throw new NotFound(id);
    }
    return problemId; 
  }

  async updateProblemById(id,updatedData){
    const updatedproblem=await Problem.findByIdAndUpdate(id,{
      title:updatedData.title,
      description:updatedData.description,
      testCases:updatedData.testCases ? problemData.testCases : []

    }
  )
  return updatedproblem;
  }
}

module.exports = ProblemRepository;
