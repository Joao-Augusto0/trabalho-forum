const jwt = require('jsonwebtoken');
require('dotenv').config()
const Usuario = require("../models/usuarios");
const Publicacao = require("../models/Publicacao");
const con = require("../dao/dbAskTalk");


const LoginUser = (req, res) => {
    let string = Usuario.toLogin(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            result = JSON.stringify(result)
            result = JSON.parse(result)
            jwt.sign((result[0]), process.env.KEY, { expiresIn: '10m' }, function (err, token) {
                if (err == null) {
                    result[0]["token"] = token
                    res.status(201).json(result[0]).end()
                } else {
                    res.status(404).json(err).end()
                }
            })
        }
    })
}



module.exports = {
    LoginUser
}