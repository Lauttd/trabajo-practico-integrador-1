import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const userModel = sequelize.define("users", {
    username: { type: DataTypes.CHAR(10), allowNull: false},
    emaiil: { type: DataTypes.CHAR(100), allowNull: false },
    password: { type: DataTypes.CHAR(255), allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user"}
});
