const Router = require("express");
const router = new Router();
const ConditionController = require("../controllers/conditionController");

router.post("/", ConditionController.addCondition);
router.get("/", ConditionController.getCondition);

router.delete("/delete/:id", ConditionController.deleteCondition);

module.exports = router;
