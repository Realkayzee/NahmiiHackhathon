import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./global.css";
import Main from "./routes/Main";
import Bond from "./routes/Bond";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Patners from "./routes/Patners";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="bond/:id" element={<Bond />} />
        <Route path="Patners/" element={<Patners />} /> 
      </Routes>
    </BrowserRouter>
);
