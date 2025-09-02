import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const articleTagModel = sequelize.define("articleTag", {
   article_id: { type: DataTypes.INTEGER, allowNull: false},
   tag_id: { type: DataTypes.INTEGER, allowNull: false}
});