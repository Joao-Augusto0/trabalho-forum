const Resposta = require('../models/Resposta')
const con = require("../dao/dbAskTalk");


const createResp = async (req, res) => {
    con.query(Resposta.toCreateResp(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const listarCategoriaResp = (req, res) => {
    con.query(Resposta.toReadAllResp(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(err).end();
        }
    })
}

module.exports = {
    createResp,
    listarCategoriaResp
}