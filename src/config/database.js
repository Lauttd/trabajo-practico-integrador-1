import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_USER,
    process.env.DB_NAME,
    process.env.DB_PASSWORD,
    {
        port: process.env.DB_PORT,
        host: process.env.DB_PORT
    }
);

export const initDB = async () => {
    try {
    await sequelize.authenticate(),
    console.log("Se conecto correctamente a la base de datos")
    await sequelize.sync({ force: true })
    } catch (error) {
        console.error("No fue posible conectarse a la base de datos", error)
    }
};