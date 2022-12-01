const SubCategoria = require("../models/SubCategoria");
const con = require("../dao/dbAskTalk");

const createSubCategoria = async (req, res) => {
    con.query(SubCategoria.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(500).json(err).end();
        }
    });
};

const listarSubCategoria = (req, res) => {
    con.query(SubCategoria.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(err).end();
        }
    })
}

const excluirSubCategoria = (req, res) => {
    con.query(SubCategoria.toDel(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    createSubCategoria,
    listarSubCategoria,
    excluirSubCategoria
}
