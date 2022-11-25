const toCreate = (model, file) => {
    if (file != null) {
        model.foto_user = file.buffer.toString("base64")
        return `INSERT INTO Usuario VALUES (DEFAULT,'${model.nome_user}','${model.nick}','${model.email}','${model.senha}','${model.telefone}','${model.foto_user}')`;
    } else {
        return `INSERT INTO Usuario VALUES (DEFAULT,'${model.nome_user}','${model.nick}','${model.email}','${model.senha}','${model.telefone}',null)`;
    }
} 

const toAscii = (model) => {
    model.forEach((d) => {
      if (d.foto_user != null) d.foto_user = d.foto_user.toString("ascii");
    });
    return model
  }

const toReadAll = () => {
    return "SELECT * FROM Usuario";
}

// const toRead = (model) => {
//     return `SELECT * FROM usuario WHERE id_user = ${model.id_user}`;
//     }

// const toDel = (model) => {
//     return `DELETE FROM usuario WHERE id_user = ${model.id_user}`;
// }

// const toUpdate = (model) => {
//     if (file !== null) {
//         model.foto_user = file.buffer.toString("base64")
//         return `UPDATE INTO usuario SET id_user = ${id_user},
//         nome_user = '${model.nome_user}',
//         nick ='${model.nick}',
//         email = '${model.email}',
//         senha = '${model.senha}',
//         telefone = '${model.telefone}',
//         foto_user'${model.foto_user}'
//         WHERE id_user = ${id_user}`;

//     } else {
//         return `UPDATE INTO usuario SET id_user = ${id_user},
//         nome_user = '${model.nome_user}',
//         nick ='${model.nick}',
//         email = '${model.email}',
//         senha = '${model.senha}',
//         telefone = '${model.telefone}',
//         foto_user = 'default'
//         WHERE id_user = ${id_user}`;
//     }


    // return `UPDATE usuario SET id_user = '${model.id_user}',
    //  email = '${model.email}',
    //   data_nasc ='${model.data_nasc}',
    //    cpf = '${model.cpf}',
    //      bairro = '${model.bairro}',
    //       rua = '${model.rua}',
    //        cep = '${model.cep}',
    //         complemento = '${model.complemento}',
    //          municipio = '${model.municipio}'
    //           where id_cliente = ${model.id_cliente}`;
// }

module.exports = {
    toReadAll,
    toCreate,
    toAscii
    // toDel,
    // toUpdate,
    // toRead
}