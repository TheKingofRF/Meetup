const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const groupsController = require("../controllers/groups");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Group Routes
// router.get("/:id", ensureAuth, groupsController.getGroup);

// router.get("/:id/feed",ensureAuth, groupsController.getFeed);

// router.post("/createGroup", upload.single("file"), groupsController.createGroup);

// router.put("/join/:id", ensureAuth, groupsController.join);

module.exports = router