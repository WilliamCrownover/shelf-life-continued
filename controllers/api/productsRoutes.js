// api/product
//  const express = require('express');
 const router = require("express").Router();
 const withAuth = require('../../utils/auth')
 const {Product, Category, User} = require('../../models')

 
 //Create Product
 router.post('/', withAuth, async (req, res,) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete product
router.delete('/:id', withAuth, async (req, res) => {
  try {
      const ProductData = await Product.destroy({
          where: {
              id: req.params.id
          }
      });

      res.status(200).json(ProductData);

  } catch (err) {
      res.status(400).json(err);
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const productsData = await Product.findAll({
      include:  [{ model: Category }, { model: User,
        attributes: { exclude: ["password"] } }],
      order: [["product_name", "ASC"]],
    });

    res.json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  

module.exports = router;