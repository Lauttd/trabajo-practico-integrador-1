import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const profileModel = sequelize.define("profile", {
    user_id: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false},
    biography: { type: DataTypes.STRING, allowNull: false},
    avatar_url: { type: DataTypes.STRING(255), allowNull: false },
    birth_date: { type: DataTypes.DATE}
});