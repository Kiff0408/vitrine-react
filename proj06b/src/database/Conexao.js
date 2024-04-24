import mongoose from "mongoose";
import "dotenv/config";

const endereco = process.env.MONGO_URI

const configuracao = {
    useNewUrlParser: true,
    useUnifiedTopology:true
}

mongoose.connect(endereco, configuracao).then(( ) => console.log("CONECTADO COM BANCO DE DADOS!!"))
.catch((erro) => {console.log(erro);});

mongoose.Promise = global.Promise