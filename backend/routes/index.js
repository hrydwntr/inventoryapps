const { Router } = require("express");
const route = Router();
const stringAPI = process.env.STRING_API;

route.get(stringAPI, (req,res) => {
    res.status(200).json({
        message: "for home page is running."
    })
})

module.exports = route