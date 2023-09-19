const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");

class TypeController {
  async addType(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getType(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }

  async deleteType(req, res, next) {
    try {
      const { id } = req.body;
      await Type.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new TypeController();
