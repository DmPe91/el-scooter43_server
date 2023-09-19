const Router = require("express");
const router = new Router();
const BrandController = require("../controllers/brandController");

router.post("/", BrandController.addBrand);
router.get("/", BrandController.getBrand);

router.delete("/delete/:id", BrandController.deleteBrand);

module.exports = router;
