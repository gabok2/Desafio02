// Instalar pg e pg-hstore para usar o postgres
// https://sequelize.org/master/manual/dialects.html
module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "desafio",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
