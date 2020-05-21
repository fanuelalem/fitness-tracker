const path = require("path");


module.exports = {
    
    get_exercise: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      },
    get_stats: (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      }

}