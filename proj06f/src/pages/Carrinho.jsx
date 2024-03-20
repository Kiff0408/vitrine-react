import React from "react";
import Navegacao from "../componentes/Navegacao";
import ProdutosExemplo from "../datas/ProdutosExemplo";
import Janela from "../componentes/Janela";

export default function Carrinho() {
    return <>
        <Navegacao titulo = "VITRINE">
                <a href="/">inicio</a>
                <a href="/promocao"> promoção</a>
                <a href="/carrinho"> Carrinho </a>

        </Navegacao>
        <Janela>
            <table width="100%">
                <tbody>
                    <tr>
                        <td>imagem </td>
                        <td> Codigo </td>
                        <td> Modelo do produto</td>
                        <td> R$1.000,00</td>
                    </tr>
                </tbody>
            </table>
        </Janela>

    </>
}