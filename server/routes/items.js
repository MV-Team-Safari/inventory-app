const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const { Sequelize } = require("sequelize");
const { application, response } = require("express");

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

router.post('/', async (req, res) => {
  // accesses all items in the database
  const items = await Item.findAll();
  // add new Item to the database
  await Item.create(req.body);
    res.json( items );
})

router.put('/:id', async (req, res) => {
  const newItem = req.body;
  const itemUpdate = await Item.findByPk(req.params.id);
  await itemUpdate.update(newItem);
res.json( itemUpdate )
})

router.delete('/:id', async (req, res) => {
  await Item.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json( await Item.findAll() );
})

module.exports = router;
