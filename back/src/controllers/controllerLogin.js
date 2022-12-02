const jwt = require('jsonwebtoken');
require('dotenv').config()
const Usuario = require("../models/usuarios");
const con = require("../dao/dbAskTalk");


const LoginUser = (req, res) => {
    let string = Usuario.toLogin(req.body)
    con.query(string, (err, result) => {
        if (err == null) {
            result = JSON.stringify(result)
            result = JSON.parse(result)
            jwt.sign((result[0]), process.env.KEY, { expiresIn: '1m' }, function (err, token) {
                if (err == null) {
                    result[0]["token"] = token
                    res.status(201).json(result).end()
                } else {
                    res.status(404).json(err).end()
                }
            })
        }
    })
}

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, process.env.KEY, (err, data) => {
        console.log(data)
    })

    res.status(200).end()

}

module.exports = {
    LoginUser,
    validaAcesso
}