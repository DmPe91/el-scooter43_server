const Router = require("express");
const router = new Router();
const NotificationController = require("../controllers/notificationController");

router.get("/:id", NotificationController.getNote);
router.get("/all", NotificationController.getAllNote);
router.post("/", NotificationController.addNote);
router.delete("/", NotificationController.deleteNote);

module.exports = router;
