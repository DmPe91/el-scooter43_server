const { Review } = require("../models/models");
const ApiError = require("../error/ApiError");

class ReviewController {
  async addReview(req, res, next) {
    try {
      const { userId, cause, description } = req.body;
      const review = await Review.create({
        userId,
        cause,
        description,
      });
      return res.json(review);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async moderationReview(req, res) {
    const { id } = req.params;
    const review = await Review.findOne({
      where: { id },
    });
    await review.update({ moderation: true });
    await review.save();
    res.json(review);
  }
  async getReviews(req, res) {
    const review = await Review.findAndCountAll({});
    res.json(review);
  }
  async deleteReview(req, res, next) {
    try {
      const { id } = req.body;
      await Review.destroy({ where: { id: id } });
      return res.json("ok!");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new ReviewController();
