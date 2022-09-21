const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const meetupsController = require("../controllers/meetups");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//meetup routes

// router.get("/feed", meetupsController.getMeetups);



module.exports = router;