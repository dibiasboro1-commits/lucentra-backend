const express = require("express");
const router = express.Router();

const toolController = require("../controllers/toolController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", authMiddleware, toolController.createTool);
router.get("/", toolController.getTools);
router.post("/upvote/:id", authMiddleware, toolController.upvoteTool);
router.post("/approve/:id", authMiddleware, toolController.approveTool);
router.get("/search", toolController.searchTools);
router.get("/trending", toolController.getTrendingTools);
router.get("/trending", toolController.getTrendingTools);
router.get("/search", toolController.searchTools);

module.exports = router;