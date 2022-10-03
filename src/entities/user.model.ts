import { Sequelize, DataTypes } from "sequelize";
export default (SEQUELIZE: Sequelize, DATATYPES: typeof DataTypes) => {
  return SEQUELIZE.define("example", {
    username: { type: DATATYPES.STRING },
    fullname: { type: DATATYPES.STRING },
  });
};
