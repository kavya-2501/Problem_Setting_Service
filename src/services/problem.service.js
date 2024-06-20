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
      console.log(problemId);
      const problem = this.problemRepository.getProblem(problemId);
      return problem;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProblemService;
