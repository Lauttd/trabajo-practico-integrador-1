import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { articleModel } from "./article.model.js";
import { tagModel } from "./tag.model.js";

export const articleTagModel = sequelize.define("articleTag", {
   article_id: { type: DataTypes.INTEGER, allowNull: false},
   tag_id: { type: DataTypes.INTEGER, allowNull: false}
});

articleModel.belongsToMany( tagModel, {foreignKey: "tag_id", as: "tag"});

tagModel.belongsToMany( articleModel, {foreignKey: "article_id", as: "article"});

articleTagModel.belongsTo( articleModel, {foreignKey: "article_id", as: "articles"});

articleTagModel.belongsTo( tagModel, {foreignKey: "tag_id", as: "tag"});
