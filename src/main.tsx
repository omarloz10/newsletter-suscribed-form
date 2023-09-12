import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import SuscribeForm from "./components/SuscribeForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SuccessMensage from "./components/SuccessMensage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="sm:min-h-screen sm:bg-Dark-Slate-Grey sm:flex sm:justify-center sm:items-center">
        <Routes>
          <Route path="/" Component={SuscribeForm}></Route>
          <Route path="/success/:email" Component={SuccessMensage}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
