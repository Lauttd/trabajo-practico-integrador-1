import { matchedData } from "express-validator";
import { userModel } from "../models/user.model.js";

export const createUser = async (req, res) => {
    const datosValidos = matchedData(req);

    try {
        const crearUser = userModel.create(datosValidos);
        return res.status(200).json(crearUser);
    } catch (error) {
        console.log("No se pudo crear el user", error);
        return res.status(404).json({ message: "Error por parte del servidor", error});
    }
}