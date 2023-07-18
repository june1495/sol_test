import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_PROJECTNAME,
  process.env.DB,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);
