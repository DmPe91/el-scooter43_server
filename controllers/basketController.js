const { Basket, BasketProduct, Product } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addBasketProduct(req, res, next) {
    try {
      let { productId, basketId } = req.params;

      const product = await Product.findOne({
        where: { id: productId },
      });

      const basketPoduct = await BasketProduct.create({
        basketId,
        productId,
        name: product.name,
        img: product.img,
        price: product.price,
      });

      return res.json(basketPoduct);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAllBasket(req, res) {
    const basket = await Basket.findAndCountAll({
      include: [{ model: BasketProduct, as: "basketproduct" }],
    });
    return res.json(basket);
  }
  async getBasket(req, res) {
    const { id } = req.params;

    const basket = await Basket.findOne({
      where: { userId: id },
      include: [{ model: BasketProduct, as: "basketproduct" }],
    });
    return res.json(basket);
  }
  async deleteBasketProduct(req, res, next) {
    try {
      const { id } = req.params;
      await BasketProduct.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
