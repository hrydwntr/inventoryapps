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
// const typegloss = require('./gloss');
// const typesuper = require('./super');
// const typepro = require('./pro')

route.use(`/api/users`, user)
route.use(`${stringAPI}/brands`, brand)
// route.use(`${stringAPI}/gloss`, typegloss)
// route.use(`${stringAPI}/super`, typesuper)
// route.use(`${stringAPI}/pro`, typepro)

module.exports = route