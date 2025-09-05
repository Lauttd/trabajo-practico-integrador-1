import { hashPassword } from "../helpers/bcrypt.helper.js";
import { creartoken } from "../helpers/crearToken.js";
import { userModel } from "../models/user.model.js";


export const register = async (req, res) => {
    const datosValidos = matchedData(req);

    const { username, email, password, role } = datosValidos
    try {

        //hasheo de password

        const hashedPassword = await hashPassword(password) 

        const crearUser = userModel.create({ username, email, password: hashedPassword, role });
        return res.status(200).json(crearUser);
    } catch (error) {
        console.log("No se pudo crear el user", error);
        return res.status(404).json({ message: "Error por parte del servidor", error});
    }
}

export const login = async (req, res) => {
 
    try {
        const existeUsuario = await userModel.findOne({ where: {username: req.body.username}});
        if (!existeUsuario)
            res.status(404).json({ message: "El usuario no existe" });

        const {id, username, role} = existeUsuario //desestructurando datos necesarios
        //password con bcrypt despues
        const token = creartoken({id, username, role});

        res.cookie("token", token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true //para que no se pueda acceder a la cookie desde el front
        })

        res.status(200).json(existeUsuario);
    } catch (error) {
        return res.status(500).json({message: "Error por parte del servidor", error});
    }
};