const Publicacao = require("../models/Publicacao");
const con = require("../dao/dbAskTalk");
const multer = require("multer");
const upload = multer().single("foto_user");

const createPublicacao = async (req, res) => {
    upload(req, res, (err) => {
        if (err) res.status(500).json({ error: 1, payload: err }).end();
        else {
            let string = Publicacao.toCreate(req.body, req.file);
            con.query(string, (err, result) => {
                if (err == null) {
                    res.status(201).json(result).end();
                } else {
                    console.log(err)
                    res.status(500).json(err).end();
                }
            });
        }
    });
};

const deletePubli = (req, res) => {
    let string = Publicacao.admDelete(req.params);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0) res.status(200).end();
            else res.status(404).end();
        else res.status(400).json(err).end();
    })
}

const listarPublicacao = (req, res) => {
    let string = Publicacao.toReadAll();
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(Publicacao.toAscii(result)).end();
        }
    });
};

const listarPublicacaoId = (req, res) => {
    con.query(Publicacao.toRead(req.params), (err, result) => {
        if (err == null) {
            res.json(Publicacao.toAscii(result)).end()
        } else {
            res.status(500).end()
        }
    })
  }


const updatePublicacao = (req, res) => {
    let string = Publicacao.toUpdate(req.body);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const excluirPublicacao = (req, res) => {
    let string = Publicacao.toDel(req.params);
    con.query(string, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0) res.status(200).end();
            else res.status(404).end();
        else res.status(400).json(err).end();
    });
};

module.exports = {
    listarPublicacao,
    createPublicacao,
    excluirPublicacao,
    updatePublicacao,
    deletePubli,
    listarPublicacaoId
}
