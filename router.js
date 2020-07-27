const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");

const sign_images = require("./routes/sign_images");
router.use("/sign_images", sign_images);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/html/index.html"));
});
module.exports = router;
