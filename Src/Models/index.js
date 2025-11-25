const sequelize = require('../Database/db.js');

const Category = require('./Category.js');
const User = require("./User.js");
const Service = require('./Service.js');
const Conquista = require('./Conquest.js');
const Recompensa = require('./Rewards.js');
const Pontuacao = require('./Ponts.js');
const UsuariosConquista = require('./UserRewards.js');
const Solicitacao = require('./Solicitacao.js');
const Nivel = require('./Level.js');
const Avaliation = require('./Avaliation.js');

const models = {
  User,
  Service,
  Conquista,
  Recompensa,
  Category,
  Pontuacao,
  UsuariosConquista,
  Solicitacao,
  Nivel,
  Avaliation,
};


Object.values(models).forEach((m) => {
  if (typeof m.initModel === "function") m.initModel(sequelize);
});

const { Category: C, User: U, Service: S, Conquista: Q, Recompensa: R, Pontuacao: P, UsuariosConquista: UC, Solicitacao: Sol, Nivel: N, Avaliation: A } = models;

C.hasMany(S, { foreignKey: 'categorias_id' });
S.belongsTo(C, { foreignKey: 'categorias_id' });

U.hasMany(S, { foreignKey: 'proprietario_usuario_id' });
S.belongsTo(U, { foreignKey: 'proprietario_usuario_id', as: 'proprietario' });

R.hasMany(P, { foreignKey: 'id_recompensa' });
P.belongsTo(R, { foreignKey: 'id_recompensa' });

U.hasMany(P, { foreignKey: 'id_usuario' });
P.belongsTo(U, { foreignKey: 'id_usuario' });

S.hasMany(P, { foreignKey: 'id_servico' });
P.belongsTo(S, { foreignKey: 'id_servico' });

U.belongsToMany(Q, { through: UC, foreignKey: 'id_usuario', otherKey: 'id_conquista' });
Q.belongsToMany(U, { through: UC, foreignKey: 'id_conquista', otherKey: 'id_usuario' });

S.hasMany(Sol, { foreignKey: 'id_servico' });
Sol.belongsTo(S, { foreignKey: 'id_servico' });

U.hasMany(Sol, { foreignKey: 'id_usuario' });
Sol.belongsTo(U, { foreignKey: 'id_usuario' });

Sol.hasOne(A, { foreignKey: 'solicitacoes_id' });
A.belongsTo(Sol, { foreignKey: 'solicitacoes_id' });

module.exports = {
  ...models,
};
