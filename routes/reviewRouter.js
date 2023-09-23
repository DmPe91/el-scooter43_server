const Router = require("express");
const router = new Router();
const ReviewController = require("../controllers/reviewController");

router.post("/", ReviewController.addReview);
router.patch("/:id", ReviewController.moderationReview);
router.get("/", ReviewController.getReviews);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
