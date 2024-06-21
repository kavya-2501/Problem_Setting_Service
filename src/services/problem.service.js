const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      //    1. Sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      //   2. Create problem and return
      const problem = await this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = this.problemRepository.getProblem(problemId);
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async deleteProblemById(problemId){
    try {
      const problem_id=this.problemRepository.deleteProblemById(problemId)
      return problem_id;
    } catch (error) {
      throw(error)
    }
  }
  async updateProblemById(problemId,updatedProblemdata){
    try {
      updatedProblemdata.description=sanitizeMarkdownContent(updatedProblemdata.description)
      const updatedproblem=this.problemRepository.updateProblemById(problemId,updatedProblemdata)
      return updatedproblem
    } catch (error) {
      throw(error)
    }
  }
}
module.exports = ProblemService;
