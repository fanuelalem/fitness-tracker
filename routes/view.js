const router = require("express").Router();
 const viewController = require('../controller/viewController')

router.get("/exercise",viewController.get_exercise);

router.get("/stats",viewController.get_stats);

module.exports = router;