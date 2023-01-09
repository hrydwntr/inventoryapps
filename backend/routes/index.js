const { Router } = require("express");
const route = Router();
const stringAPI = process.env.STRING_API;

route.get(stringAPI)



module.exports = route