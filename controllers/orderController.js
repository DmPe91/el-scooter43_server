const { Order } = require("../models/models");
const ApiError = require("../error/ApiError");

class OrderController {
  async addOrder(req, res, next) {
    try {
      const { cause, description, contact, place, userId } = req.body;
      const order = await Order.create({
        cause,
        description,
        contact,
        place,
        userId,
      });
      return res.json(order);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOrder(req, res) {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id },
    });
    return res.json(order);
  }
  async getAllOrder(req, res) {
    const order = await Order.findAndCountAll({});
    return res.json(order);
  }
  async deleteOrder(req, res) {
    try {
      const { id } = req.body;
      await Order.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new OrderController();
