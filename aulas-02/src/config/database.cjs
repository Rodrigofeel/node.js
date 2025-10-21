module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "p0stgr52",
    database: "meu_projeto_node",
    define: {
        timestamps: true, // createdAt e updatedAt
        underscored: true, // created_at e updated_at
        underscoredAll: true, // relacionamentos entre tabelas
    },
};
