import React from "react";
import Navegacao from "../componentes/Navegacao";
import Exibidor from "../componentes/Exibidor";
import ProdutosExemplo from "../datas/ProdutosExemplo";

export default function Promocao () {
    return <>
        <Navegacao titulo = "VITRINE">
            <a href="/">inicio</a>
            <a href="/promocao"> promoção</a>
            <a href="/carrinho"> Carrinho </a>

     </Navegacao>

     {
        ProdutosExemplo.map(function(produto,indice) {
            if ( produto.promocao == true)
                return <Exibidor key= { indice} produto= {produto}/>

        })
    }
    </>
}