const express = require("express");
const router = express.Router();
const { Item } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    // accesses all items in the database
    const items = await Item.findAll();
    // sending out an object with all items
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
