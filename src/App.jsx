import React from "react";
import Home from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Player from "./pages/player";
import Footer from "../src/components/footer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
