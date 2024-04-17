import React, {useState, useEffect} from "react";
import Navegacao from "../componentes/Navegacao";
import Principal from "../componentes/Principal";
/*import ProdutosExemplo from "../datas/ProdutosExemplo";*/
import { ObterProdutos } from "../functions/RequisicaoServidor";

 export default function Vitrine() {

   const [ produtos, definirProdutos] = useState([])
   
   useEffect(function(){
      ObterProdutos()
         .then(function(resposta){
            if(resposta.status === 200)
               definirProdutos(resposta.data);
         })
         .catch(function(erro){
            console.log(erro);

         })
      
   }, [])

    return <>
      <Navegacao titulo = "VITRINE">
         <a href = "/">Inicio</a>
         <a href = "/promocao"> Promoção </a>
         <a href="/carrinho">Carrinho</a>
      </Navegacao>
   {produtos.length > 0 &&
      <Principal produtos = {produtos}/>
   }
    </>
 }