const { Product, ProductInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid"); /// генерация id
const path = require("path");

class ProductController {
  async addProduct(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ProductInfo.create({
            title: i.title,
            description: i.description,
            productId: product.id,
          })
        );
      }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getProducts(req, res) {
    const { brandId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 6;
    let offset = page * limit - limit;
    let product;
    if (!brandId && !typeId) {
      product = await Product.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      product = await Product.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }
    if (!brandId && typeId) {
      product = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (brandId && typeId) {
      product = await Product.findAndCountAll({
        where: { typeId, brandId },
        limit,
        offset,
      });
    }
    return res.json(product);
  }

  async getProduct(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: "info" }],
    });
    return res.json(product);
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.body;
      await Product.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ProductController();
