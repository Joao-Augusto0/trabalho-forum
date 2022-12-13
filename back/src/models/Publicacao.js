 const toCreate = (model, file) => {
  if (file != null) {
    model.foto_publi = file.buffer.toString("base64");
    return `INSERT INTO Publicacao VALUES (DEFAULT,'${model.titulo_post}',${model.id_user},'${model.categoria}','${model.subCategoria}','${model.coment}','${model.data}',${model.curtidas},'${model.foto_publi}');`
  } else {
    return `INSERT INTO Publicacao VALUES (DEFAULT,'${model.titulo_post}','${model.id_user}','${model.categoria}','${model.subCategoria}','${model.coment}','${model.data}',${model.curtidas},DEFAULT)`;
  }
};

const admDelete = (model) => {
  return `DELETE FROM Publicacao WHERE id_post = ${model.id_post}`
}


const toAscii = (model) => {
  model.forEach((d) => {
    if (d.foto_publi != null) d.foto_publi = d.foto_publi.toString("ascii");
  });
  return model;
};

const toReadAll = () => {
  return "SELECT * FROM Publicacao order by id_post desc";
};

const toRead = (model) => {
  return `SELECT * FROM Publicacao WHERE id_post = ${model.id_post} order by id_post desc`;
};

const toDel = (model) => {
  return `DELETE FROM Publicacao WHERE id_post = ${model.id_post}`;
};

const toUpdate = (model) => {
  return `UPDATE Publicacao SET titulo_post = '${model.titulo_post}',id_user =${model.id_user},categoria = '${model.categoria}',subCategoria = '${model.subCategoria}',coment = '${model.coment}',data = '${model.data}',curtidas = ${model.curtidas},foto_publi = '${model.foto_publi}'WHERE id_post = ${model.id_post}`;
}

module.exports = {
  toReadAll,
  toCreate,
  toAscii,
  toDel,
  toUpdate,
  admDelete,
  toRead
};
