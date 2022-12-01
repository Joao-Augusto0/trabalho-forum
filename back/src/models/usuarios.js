const toCreate = (model, file) => {
  if (file != null) {
    model.foto_user = file.buffer.toString("base64");
    return `INSERT INTO Usuario VALUES (DEFAULT,'${model.nome_user}','${model.nick}','${model.email}','${model.senha}','${model.telefone}','${model.foto_user}')`;
  } else {
    return `INSERT INTO Usuario VALUES (DEFAULT,'${model.nome_user}','${model.nick}','${model.email}','${model.senha}','${model.telefone}',null)`;
  }
};

const toAscii = (model) => {
  model.forEach((d) => {
    if (d.foto_user != null) d.foto_user = d.foto_user.toString("ascii");
  });
  return model;
};

const toReadAll = () => {
  return "SELECT * FROM Usuario";
};

const toRead = (model) => {
  return `SELECT * FROM Usuario WHERE id_user = ${model.id_user}`;
};

const toDel = (model) => {
  return `DELETE FROM Usuario WHERE id_user = ${model.id_user}`;
};


const toUpdate = (model) => {
  return `UPDATE Usuario SET  nome_user = '${model.nome_user}', nick ='${model.nick}',email = '${model.email}',senha = '${model.senha}',telefone = '${model.telefone}',foto_user = '${model.foto_user}' WHERE id_user = ${model.id_user}`;
}


module.exports = {
  toReadAll,
  toCreate,
  toAscii,
  toDel,
  toUpdate,
  toRead
};
