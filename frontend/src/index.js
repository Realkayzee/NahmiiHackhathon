import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./global.css";
import Main from "./routes/Main";
import Bond from "./routes/Bond";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/nav/Nav";
import Patners from "./routes/Patners";

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={client}>
    <ConnectKitProvider>
      <BrowserRouter>
        <Nav ConnectKitButton={ConnectKitButton}/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="bond/:id" element={<Bond />} />
          <Route path="Patners/" element={<Patners />} />
        </Routes>
      </BrowserRouter>
    </ConnectKitProvider>
  </WagmiConfig>
);
