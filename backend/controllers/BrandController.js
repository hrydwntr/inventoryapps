const { Brand } = require("../models");
// nama Brand harus sesuai dengan yang di models

class BrandController {
  static async getAllBrands(req, res) {
    try {
      let brands = await Brand.findAll({
        order: [["id", "asc"]],
      });
      res.status(200).json(brands);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getBrandById(req, res) {
    try {
      const id = +req.params.id;
      let result = await Brand.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `Brand id ${id} not found.`,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const { name, total_employee, address } = req.body;
      let result = await Brand.create({
        name,
        total_employee,
        address,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await Brand.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `Brand id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "Brand has not been deleted.",
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
        const { name, total_employee, address } = req.body;
        const id = +req.params.id;
        let result = await User.update(
          {
            name,
            total_employee,
            address,
          },
          {
            where: {
              id,
            },
          }
        );
        if (result[0] === 1)
          res.status(200).json({
            message: `User id ${id} has been updated.`,
          });
        else
          res.status(400).json({
            message: "User has not been updated.",
          });
      } catch (error) {
        res.status(500).json(error);
      }
  }
}

module.exports = BrandController;
