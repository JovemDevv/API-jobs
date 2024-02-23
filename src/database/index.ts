import { Sequelize } from "sequelize";

const databaseUrl = process.env.DATABASE_URL || "";

export const sequelize = new Sequelize(databaseUrl, {
  define: {
    underscored: true,
  },
});

// snake_case: trabalhando com banco
//camelCase: trabalhando na aplicação
