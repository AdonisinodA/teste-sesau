import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { ListaEstabelecimento } from "../pages/listaEstabelecimento/ListaEstabelecimento";
import { MostraEstabelecimento } from "../pages/mostraEstabelecimento/MostraEstabelecimento";
import { FormularioEstabelecimento } from "../pages/formularioEstabelecimento/FormularioEstabelecimento";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cnes/estabelecimentos" element={<ListaEstabelecimento/>} />
        <Route path="/cnes/estabelecimento/:codigo_cnes" element={<MostraEstabelecimento/>} />
        <Route path="/cnes/formulario/estabelecimento" element={<FormularioEstabelecimento/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
