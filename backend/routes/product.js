const route = require("express").Router();
const ProductController = require("../controllers/ProductController");

route.get("/", ProductController.getAllUsers);

route.get("/account/:id", ProductController.getUserById);
route.post("/register", ProductController.register);
route.post("/login", ProductController.login);
route.delete("/delete/:id", ProductController.delete);
route.put("/update/:id", ProductController.update);


module.exports = route;