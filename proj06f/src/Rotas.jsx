import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vitrine from "./pages/Vitrine";
import Produto from "./pages/Produtos";
import Promocao from "./pages/Promocao";
import Carrinho from "./pages/Carrinho";
import Catalogar from "./pages/Catalogar";



export default  function Rotas( ) {
    return <BrowserRouter>
        <Routes>
            <Route index path= "/" element = { < Vitrine/> } />
            <Route path ="/produto/:codigo" element = {<Produto/> }/>
            <Route path = "/promocao" element = {<Promocao/>}/>
            <Route path = "/Carrinho" element = {<Carrinho/>}/>
            <Route path = "/catalogar" element = { <Catalogar/>}/>

        </Routes>
    </BrowserRouter>
}