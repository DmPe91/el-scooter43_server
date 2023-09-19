const { Brand } = require("../models/models");
const ApiError = require("../error/ApiError");

class BrandController {
  async addBrand(req, res) {
    const { name } = req.body;
    const type = await Brand.create({ name });
    return res.json(type);
  }

  async getBrand(req, res) {
    const types = await Brand.findAll();
    return res.json(types);
  }

  async deleteBrand(req, res) {
    try {
      const { id } = req.body;
      await Brand.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new BrandController();
