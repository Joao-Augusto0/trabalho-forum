const toCreate = (model) => {
  return `INSERT INTO Categoria VALUES ('${model.categoria}',${model.favorito})`;
};

const toReadAll = () => {
  return "SELECT * FROM Categoria";
};

const toDel = (model) => {
  return `DELETE FROM Categoria WHERE categoria = '${model.categoria}'`;
};

module.exports = {
  toReadAll,
  toCreate,
  toDel
};
