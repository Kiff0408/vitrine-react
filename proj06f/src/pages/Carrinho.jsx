import React, {useState, useEffect} from "react";
import Navegacao from "../componentes/Navegacao";
//import ProdutosExemplo from "../datas/ProdutosExemplo";
import Janela from "../componentes/Janela";
import ObterCarrinho from "../functions/ObterCarrinho";
import pagamento from "../functions/Pagamento";
import { ObterProdutos } from "../functions/RequisicaoServidor";

export default function Carrinho() {
    const [ carrinho, definirCarrinho ] = useState([])
    const [preco, definirPreco ] = useState(0)
    const [produtos, definirProdutos] = useState([])

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
    
    useEffect(function() {
        const resultado = ObterCarrinho()
        definirCarrinho(resultado)

    },[produtos])

    useEffect(function() {
        var total = 0
        carrinho.map(function(codigo){
            for (const produto of produtos)
                if (produto.codigo == codigo)
                    total += parseInt(produto.preco)
        } )
        definirPreco(total)
    }, [produtos, carrinho])


    return <>
        <Navegacao titulo = "VITRINE">
                <a href="/">inicio</a>
                <a href="/promocao"> promoção</a>
                <a href="/carrinho"> Carrinho </a>

        </Navegacao>
        <Janela>
            <table width="100%">
                <tbody>
                {produtos.length >0 &&
                    carrinho.map(function(codigo, indice) {
                        for (const produto of produtos) {
                            if (produto.codigo == codigo)
                                return <tr key = {indice}>
                                        <td> <img src= {produto.imagens[0]} width= "50px"  /> </td>
                                        <td> {produto.codigo} </td>
                                        <td> { produto.modelo}</td>
                                        <td> {produto.preco}</td>

                                     </tr>

                        }
                    })
                    
                }
                </tbody>
            </table>

            <h1> total R$ {preco},00 </h1>
            <button onClick={pagamento}> Pagament por Pix </button>
            
        </Janela>

    </>
}