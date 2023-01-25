const { User } = require("../models");

class UserController {
  static async getAllUsers(req, res) {
    try {
      let users = await User.findAll({
        order: [["id", "asc"]],
      });
      console.log(users);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getUserById(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.findByPk(id);

      if (result) res.status(200).json(result);
      else
        res.status(404).json({
          message: `User id ${id} not found.`,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    try {
      const { username, email, password, amount, code, type } = req.body;
      let result = await User.create({
        username,
        email,
        password,
        amount,
        code,
        type,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let userFound = await User.findOne({
        where: {
          email: email.toLowerCase(),
        },
      });
      if (userFound) {
        if (userFound.password === password) {
          res.status(200).json(userFound);
        } else {
          res.status(400).json({
            message: "Password not match.",
          });
        }
      } else {
        res.status(404).json({
          message: "Email not found.",
        });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await User.destroy({
        where: {
          id,
        },
      });
      if (result)
        res.status(200).json({
          message: `User id ${id} has been deleted.`,
        });
      else
        res.status(400).json({
          message: "User has not been deleted.",
        });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { username, email, password, amount, code, type } = req.body;
      const id = +req.params.id;
      let result = await User.update(
        {
          username,
          email,
          password,
          amount,
          code,
          type,
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

module.exports = UserController;
