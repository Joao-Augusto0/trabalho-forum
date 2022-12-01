const Categoria = require("../models/Categoria");
const con = require("../dao/dbAskTalk");

const createCategoria = async (req, res) => {
    con.query(Categoria.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const listarCategoria = (req, res) => {
    con.query(Categoria.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(err).end();
        }
    })
}

const excluirCategoria = (req, res) => {
    con.query(Categoria.toDel(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listarCategoria,
    createCategoria,
    excluirCategoria
}
