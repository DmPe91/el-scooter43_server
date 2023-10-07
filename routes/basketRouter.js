const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");
const RoleauthMiddleware = require("../middleware/checkRoleMidleware");

router.post("/:basketId/product/:productId", BasketController.addBasketProduct);
router.get("/", BasketController.getAllBasket);
router.get("/:id", BasketController.getBasket);
router.delete("/:id", authMiddleware, BasketController.deleteBasketProduct);

module.exports = router;
