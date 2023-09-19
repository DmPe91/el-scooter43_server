const Router = require("express");
const router = new Router();
const ProductController = require("../controllers/productController");

router.post("/", ProductController.addProduct);
router.get("/", ProductController.getProducts);
router.get("/:id", ProductController.getProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = router;
