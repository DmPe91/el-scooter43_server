const Router = require("express");
const router = new Router();
const BasketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleware");
const RoleauthMiddleware = require("../middleware/checkRoleMidleware");

router.post(
  "/:basketId/product/:productId",
  authMiddleware,
  BasketController.addBasketProduct
);
router.get("/", RoleauthMiddleware, BasketController.getAllBasket);
router.get("/:id", authMiddleware, BasketController.getBasket);
router.delete("/:id", RoleauthMiddleware, BasketController.deleteBasketProduct);

module.exports = router;
