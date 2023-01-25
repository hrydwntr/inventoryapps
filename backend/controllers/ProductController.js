const { Product } = require("../models");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      let products = await Product.findAll({
        order: [["id", "asc"]],
      });
      console.log(products);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getProductById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Product.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `Product id ${id} not found.`,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { type, image, UserId, BrandId} = req.body;
      let result = await Product.create({
        type,
        image,
        UserId,
        BrandId,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Product.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `Product id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "Product has not been deleted.",
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { type, image, UserId, BrandId } = req.body;
      const id = +req.params.id;
      let result = await Product.update(
        {
            type,
            image,
            UserId,
            BrandId,
        },
        {
          where: {
            id,
          },
        }
      );
      if (result[0] === 1)
        res.status(200).json({
          message: `Product id ${id} has been updated.`,
        });
      else
        res.status(400).json({
          message: "Product has not been updated.",
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
