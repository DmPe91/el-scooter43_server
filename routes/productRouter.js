const Router = require("express");
const router = new Router();
const ProductController = require("../controllers/productController");

router.post("/add", ProductController.addProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.delete("/", ProductController.deleteProduct);

module.exports = router;
