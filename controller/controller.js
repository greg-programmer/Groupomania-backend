const express = require('express');
const router = express.Router();

  router.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });

module.exports = router;