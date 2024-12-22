import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { ListaEstabelecimento } from "../pages/listaEstabelecimento/ListaEstabelecimento";
import { MostraEstabelecimento } from "../pages/mostraEstabelecimento/MostraEstabelecimento";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cnes/estabelecimentos" element={<ListaEstabelecimento/>} />
        <Route path="/cnes/estabelecimento/:codigo_cnes" element={<MostraEstabelecimento/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
