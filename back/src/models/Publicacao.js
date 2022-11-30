const toCreate = (model, file) => {
    if (file != null) {
      model.foto_publi = file.buffer.toString("base64");
      return `INSERT INTO Publicacao VALUES (DEFAULT,'${model.titulo_post}','${model.id_post}','${model.categoria}','${model.subCategoria}','${model.coment}','${model.data}',${model.curtidas},'${model.foto_publi}')`;
    } else {
        return `INSERT INTO Publicacao VALUES (DEFAULT,'${model.titulo_post}','${model.id_post}','${model.categoria}','${model.subCategoria}','${model.coment}','${model.data}',${model.curtidas},DEFAULT)`;
    }
  };
  
  const toAscii = (model) => {
    model.forEach((d) => {
      if (d.foto_publi != null) d.foto_publi = d.foto_publi.toString("ascii");
    });
    return model;
  };
  
  const toReadAll = () => {
    return "SELECT * FROM Publicacao";
  };
  
  const toRead = (model) => {
    return `SELECT * FROM Publicacao WHERE id_post = ${model.id_post}`;
  };
  
  const toDel = (model) => {
    return `DELETE FROM Publicacao WHERE id_post = ${model.id_post}`;
  };
  
  const toUpdate = (model) => {
    if (file !== null) {
      model.foto_publi = file.buffer.toString("base64");
      return `UPDATE INTO Publicacao SET id_post = ${id_post},
          titulo_post = '${model.titulo_post}',
          id_user ='${model.id_post}',
          categoria = '${model.categoria}',
          subCategoria = '${model.subCategoria}',
          coment = '${model.coment}',
          data = '${model.data}',
          curtidas = ${model.curtidas},
          foto_publi'${model.foto_publi}'
          WHERE id_post = ${id_post}`;
    } else {
      return `UPDATE INTO Publicacao SET id_post = ${id_post},
          titulo_post = '${model.titulo_post}',
          id_post ='${model.id_post}',
          categoria = '${model.categoria}',
          subCategoria = '${model.subCategoria}',
          coment = '${model.coment}',
          data = '${model.data}',
          curtidas = ${model.curtidas},
          foto_publi = 'default'
          WHERE id_post = ${id_post}`;
    }
  }
  
  module.exports = {
    toReadAll,
    toCreate,
    toAscii,
    toDel,
    toUpdate,
    toRead
  };
  