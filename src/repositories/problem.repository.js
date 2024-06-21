// all the queries to db are going to be written here
const { Problem } = require("../models");

// here the entries are created in the database  
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
