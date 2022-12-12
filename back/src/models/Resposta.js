const toCreateResp = (model) => {
    return `INSERT INTO Resposta VALUES (DEFAULT,${model.id_post},${model.id_user},'${model.resp}')`;
  }
  
  const toReadAllResp = () => {
    return "SELECT * FROM Resposta";
  }

  
const toUpdateResp = (model) => {
    return `UPDATE Resposta SET id_post = ${model.id_post}, id_user = ${model.id_user}, resp = '${model.resp}' WHERE id_resp = ${model.id_resp}`;
  }

  module.exports = {
    toCreateResp,
    toReadAllResp,
    toUpdateResp,
  }