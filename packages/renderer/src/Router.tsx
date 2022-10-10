import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./views/Home";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Router;
