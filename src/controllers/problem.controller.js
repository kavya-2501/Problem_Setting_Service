function pingCheckController(req, res) {
  return res.json({ message: "Ping controller is up" });
}

function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

module.exports = {
  pingCheckController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};