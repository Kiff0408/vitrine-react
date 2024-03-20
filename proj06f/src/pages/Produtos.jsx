import React from "react";
import Navegacao from "../componentes/Navegacao";


export default function Produto() {
    return <>
        <Navegacao titulo = "VITRINE">
         <a href = "/">Inicio</a>
         <a href = "/promocao"> Promoção </a>
         <a href="/carrinho">Carrinho</a>
      </Navegacao>
    </>
}