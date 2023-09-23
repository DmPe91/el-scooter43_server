const { Basket, BasketProduct } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController {
  async addBasketProduct(req, res, next) {
    try {
      const { productId, basketId } = req.body;
      const basketPoduct = await BasketProduct.create({
        basketId,
        productId,
      });
      return res.json(basketPoduct);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllBasket(req, res) {
    const basket = await Basket.findAndCountAll({});
    return res.json(basket);
  }
  async getBasket(req, res) {
    const { id } = req.params;

    const basket = await Basket.findOne({
      where: { id },
      include: [{ model: BasketProduct, as: "basketproduct" }],
    });
    return res.json(basket);
  }
  async deleteBasketProduct(req, res, next) {
    try {
      const { id } = req.body;
      await BasketProduct.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BasketController();
