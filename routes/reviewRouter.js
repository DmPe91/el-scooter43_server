const Router = require("express");
const router = new Router();
const ReviewController = require("../controllers/reviewController");
const RoleauthMiddleware = require("../middleware/checkRoleMidleware");

router.post("/", ReviewController.addReview);
router.patch("/:id", RoleauthMiddleware, ReviewController.moderationReview);
router.get("/", ReviewController.getReviews);
router.delete("/:id", RoleauthMiddleware, ReviewController.deleteReview);

module.exports = router;
