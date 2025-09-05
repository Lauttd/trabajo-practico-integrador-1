import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

initDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`corriendo en http://localhost:${PORT}`)
    });
});