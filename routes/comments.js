const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const commentController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment routes

// router.post("/createComment/:id", commentsController.createComment);

// router.put("/likeComment/:id", commentsController.likeComment);

// router.put("/editComment/:id", commentsController.editComment);

// router.delete("/deleteComment/:id", commentsController.deleteComment);

module.exports = router;

