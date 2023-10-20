const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController");
const RoleauthMiddleware = require("../middleware/checkRoleMidleware");

router.get("/:id", RoleauthMiddleware, OrderController.getOrder);
router.get("/", RoleauthMiddleware, OrderController.getAllOrder);
router.post("/", OrderController.addOrder);
router.delete("/:id", RoleauthMiddleware, OrderController.deleteOrder);

module.exports = router;
