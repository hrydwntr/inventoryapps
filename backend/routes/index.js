const { Router } = require("express");
const route = Router();
const stringAPI = process.env.STRING_API; //api

route.get(stringAPI, (req,res) => {
    res.status(200).json({
        message: "for home page is running."
    })
})


const user = require('./user');
const brand = require('./brand');
// const category = require('./category');

route.use(`/api/users`, user)
route.use(`${stringAPI}/brands`, brand)
// route.use(`${stringAPI}/category`, category)

module.exports = route