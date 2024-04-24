import  express  from "express";
import cors from  "cors";
import rotas from "./Rotas.js";
import "./database/Conexao.js";

const servidor = express()

servidor.use(cors())
servidor.use(express.json())
servidor.use(rotas);

servidor.listen(4000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
    console.log("http://localhost:4000/")
    })