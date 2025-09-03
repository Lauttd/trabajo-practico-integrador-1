import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { profileModel } from "./profile.model.js";

export const userModel = sequelize.define("users", {
    username: { type: DataTypes.CHAR(10), allowNull: false},
    emaiil: { type: DataTypes.CHAR(100), allowNull: false },
    password: { type: DataTypes.CHAR(255), allowNull: false },
    role: { type: DataTypes.ENUM("user", "admin"), defaultValue: "user"}
});

userModel.hasOne( profileModel, {foreignKey: "profile_id", as: "profile"});

profileModel.belongsTo( userModel{ foreignKey: "user_id", as: "user"});

