import { Sequelize } from "sequelize";
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_PROJECTNAME,
  process.env.DB,
  process.env.DB_PASSWORD,
  {
    host: "movistardb.cjcmv3tc2pyq.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    port: 3306,
  }
);
