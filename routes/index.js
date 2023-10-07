const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const typeRouter = require("./typeRouter");
const conditionRouter = require("./conditionRouter");
const basketRouter = require("./basketRouter");
const reviewController = require("./reviewRouter");
const orderRouter = require("./orderRouter");
const notificationRouter = require("./notificationRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/condition", conditionRouter);
router.use("/product", productRouter);
router.use("/basket", basketRouter);
router.use("/review", reviewController);
router.use("/order", orderRouter);
router.use("/notification", notificationRouter);

module.exports = router;
