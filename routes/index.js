const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");
const typeRouter = require("./typeRouter");
const conditionRouter = require("./conditionRouter");
const basketRouter = require("./basketRouter");
const reviewController = require("./reviewRouter");
const orderRouter = require("./orderRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/condition", conditionRouter);
router.use("/product", productRouter);
router.use("/basket", basketRouter);
router.use("/review", reviewController);
router.use("/order", orderRouter);

module.exports = router;
