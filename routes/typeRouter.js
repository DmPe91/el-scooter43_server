const Router = require("express");
const router = new Router();
const TypeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMidleware");

router.post("/", TypeController.addType);
router.get("/", TypeController.getType);
router.delete("/", TypeController.deleteType);

module.exports = router;
