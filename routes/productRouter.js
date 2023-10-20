const Router = require("express");
const router = new Router();
const ProductController = require("../controllers/productController");

const RoleauthMiddleware = require("../middleware/checkRoleMidleware");

router.post("/add", RoleauthMiddleware, ProductController.addProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.delete("/:id", RoleauthMiddleware, ProductController.deleteProduct);

module.exports = router;
