const { Notification } = require("../models/models");
const ApiError = require("../error/ApiError");

class NotificationController {
  async addNote(req, res, next) {
    try {
      const { cause, description, orderId, userId } = req.body;
      const note = await Notification.create({
        cause,
        description,
        orderId,
        userId,
      });
      res.json(note);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllNote(req, res) {
    const note = await Notification.findAndCountAll({});
    res.json(note);
  }
  async getNote(req, res) {
    const { id } = req.params;
    const note = await Notification.findOne({
      where: { id },
    });
    return res.json(note);
  }
  async deleteNote(req, res, next) {
    try {
      const { id } = req.body;
      await Notification.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new NotificationController();
