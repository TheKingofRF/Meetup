const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const commentController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");