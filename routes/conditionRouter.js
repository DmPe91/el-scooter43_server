const Router = require("express");
const router = new Router();
const ConditionController = require("../controllers/conditionController");

router.post("/", ConditionController.addCondition);
router.get("/", ConditionController.getCondition);

router.delete("/", ConditionController.deleteCondition);

module.exports = router;
