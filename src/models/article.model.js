import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const articleModel = sequelize.define("article", {
    title: { type: DataTypes.STRING(200), allowNull: false },
    content: { type: DataTypes.TEXT(50), allowNull: false },
    excerpt: { type: DataTypes.STRING(500) },
    status: { type: DataTypes.ENUM("published", "archived"), defaultValue: "published" },
});

