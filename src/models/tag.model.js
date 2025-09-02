import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const tagModel = sequelize.define("tag", {
    name:{ type: DataTypes.STRING, allowNull: false}
});

