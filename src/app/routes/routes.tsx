import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "../App";
import { ListaEstabelecimento } from "../pages/listaEstabelecimento/ListaEstabelecimento";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/cnes/estabelecimentos" element={<ListaEstabelecimento/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
