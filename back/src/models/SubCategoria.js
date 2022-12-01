const toCreate = (model) => {
  return `INSERT INTO SubCategoria VALUES ('${model.subCategoria}','${model.categoria}',${model.favorito} )`;
};

const toReadAll = () => {
  return "SELECT * FROM SubCategoria";
};

const toDel = (model) => {
  return `DELETE FROM SubCategoria WHERE Subcategoria = '${model.subCategoria}'`;
};

module.exports = {
  toReadAll,
  toCreate,
  toDel,
};
