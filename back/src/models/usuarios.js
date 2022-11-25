const toCreate  = (model) =>{
    return `INSERT INTO usuario VALUES (DEFAULT, '${model.id_user}','${model.nome_user}','${model.nick}','${model.email}','${model.senha}','${model.telefone}')`;
}

const toReadAll = () => {
return "SELECT * FROM usuario ORDER BY id_user asc";
}

const toRead = (model) => {
    return `SELECT * FROM usuario WHERE id_user = ${model.id_user}`;
    }
    
const toDel = (model)=>{
return `DELETE FROM usuario WHERE id_user = ${model.id_user}`;
}

const toUpdate = (model)=>{
return `UPDATE usuario SET id_user = '${model.id_user}', email = '${model.email}', data_nasc ='${model.data_nasc}', cpf = '${model.cpf}',  bairro = '${model.bairro}', rua = '${model.rua}', cep = '${model.cep}', complemento = '${model.complemento}', municipio = '${model.municipio}' where id_cliente = ${model.id_cliente}`;
}

module.exports = {
toReadAll,
toCreate,
toDel,
toUpdate,
toRead
}