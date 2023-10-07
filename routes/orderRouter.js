const Router = require("express");
const router = new Router();
const OrderController = require("../controllers/orderController");

router.get("/:id", OrderController.getOrder);
router.get("/", OrderController.getAllOrder);
router.post("/", OrderController.addOrder);
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
