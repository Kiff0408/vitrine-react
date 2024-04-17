import React, {useState, useEffect} from "react";
import Navegacao from "../componentes/Navegacao";
import Exibidor from "../componentes/Exibidor";
//import ProdutosExemplo from "../datas/ProdutosExemplo";
import { ObterPromocao } from "../functions/RequisicaoServidor";


export default function Promocao () {
    const {promocao,definirPromocao} = useState([])
    useEffect(function(){
        ObterPromocao()
        .then(function(resposta){
            if(resposta.status === 200)
            definirPromocao(resposta.data);

        })
        .catch(function(erro){
            console.logo(erro);
        })
    }, [])

    return <>
        <Navegacao titulo = "VITRINE">
            <a href="/">inicio</a>
            <a href="/promocao"> promoção</a>
            <a href="/carrinho"> Carrinho </a>

     </Navegacao>

     {promocao.length > 0 &&

        promocao.map(function(produto,indice) {
            if ( produto.promocao == true)
                return <Exibidor key= { indice} produto= {produto}/>

        })
    }
    </>
}