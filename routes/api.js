const router = require("express").Router();
const apiController = require('../controller/apiController')


router.route('/workouts')
.get(apiController.get_workout)
.post(apiController.post_workout)
.delete(apiController.delete_workout)
      
router.route('/workouts/:id')
.put(apiController.put_workout)
      
router.route("/workouts/range")
.get(apiController.get_range)



module.exports = router;





