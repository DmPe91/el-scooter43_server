const { Product, ProductInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
const uuid = require("uuid"); /// генерация id
const path = require("path");

class ProductController {
  async addProduct(req, res, next) {
    try {
      let { name, price, conditionId, typeId, info } = req.body;
      price = Number(price);
      let { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const product = await Product.create({
        name,
        price,
        conditionId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          ProductInfo.create({
            tittle: i.tittle,
            description: i.description,
            productId: product.id,
          });
        });
      }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message + "test"));
    }
  }

  async getProducts(req, res) {
    let { conditionId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let product;
    if (!conditionId && !typeId) {
      product = await Product.findAndCountAll({ limit, offset });
    }
    if (conditionId && !typeId) {
      product = await Product.findAndCountAll({
        where: { conditionId },
        limit,
        offset,
      });
    }
    if (!conditionId && typeId) {
      product = await Product.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }
    if (conditionId && typeId) {
      product = await Product.findAndCountAll({
        where: { typeId, conditionId },
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

  async deleteProduct(req, res, next) {
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
