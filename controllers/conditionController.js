const { Condition } = require("../models/models");
const ApiError = require("../error/ApiError");

class ConditionController {
  async addCondition(req, res) {
    const { name } = req.body;
    const type = await Condition.create({ name });
    return res.json(type);
  }

  async getCondition(req, res) {
    const types = await Condition.findAll();
    return res.json(types);
  }

  async deleteCondition(req, res) {
    try {
      const { id } = req.body;
      await Condition.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new ConditionController();
