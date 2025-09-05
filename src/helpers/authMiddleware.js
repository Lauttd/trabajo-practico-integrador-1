import jwt from "jsonwebtoken";
import "dotenv/config"

export const validarToken = (req, res, next) => {
    const token = req.cookies.token

    try {
        const decode = jwt.verify (token, process.env.JWT_SECRET)
        
        req.userData = decode

        next()

    } catch (error) {
        return res.status(401).json({ message: "token no valido" });
    }


}

