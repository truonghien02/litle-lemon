import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import ReserveSuccess from "./pages/ReserveSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="reservation/success" element={<ReserveSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;
