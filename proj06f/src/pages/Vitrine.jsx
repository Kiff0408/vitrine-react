import React from "react";
import Navegacao from "../componentes/Navegacao";
import Principal from "../componentes/Principal";
import ProdutosExemplo from "../datas/ProdutosExemplo";


 export default function Vitrine() {
    return <>
      <Navegacao titulo = "VITRINE">
         <a href = "/">Inicio</a>
         <a href = "/promocao"> Promoção </a>
         <a href="/carrinho">Carrinho</a>
      </Navegacao>

      <Principal produtos = {ProdutosExemplo}/>
    </>
 }