import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paths from "./paths";
import Layout from "../layouts";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {Paths.map(({ path, element, hasLayout }, index) => (
          <Route
            key={index}
            path={path}
            element={hasLayout ? <Layout>{element}</Layout> : element}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
