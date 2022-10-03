import sequelize, { Sequelize } from "sequelize";
import dbConfig from "../configs/db.config";
import userModel from "./user.model";

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
});

const tbl = {
  db: db,
  sequelize: sequelize,
  user: userModel(db, sequelize)
};

db.sync();
export default tbl;
