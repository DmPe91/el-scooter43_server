const { Product } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid"); /// генерация id
const path = require("path");

class ProductController {
  async addProduct(req, res, next) {
    try {
      const { name, price, brandId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + "jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const product = await Product.create({
        name,
        price,
        brandId,
        img: fileName,
      });
      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getProducts(req, res) {}

  async getProduct(req, res) {}

  async deleteProduct(req, res) {}
}

module.exports = new ProductController();
