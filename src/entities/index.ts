import sequelize, { Sequelize } from "sequelize";
import dbConfig from "../configs/db.config";

const db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
});

const tbl = {
  db: db,
  sequelize: sequelize,
};

function define() {
  return db.define("users", {
    name: sequelize.STRING,
    username: sequelize.STRING,
  });
}
define();

db.sync();
export default tbl;
