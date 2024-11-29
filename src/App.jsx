import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Activity from "./pages/Activity";
import { path } from "framer-motion/client";
import ActivityDetail from "./components/ActivityDetail";
// import About from "./pages/About";

const App = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <Activity />,
    },
    {
      id: 2,
      path: "/activity/:id",
      element: <ActivityDetail />,
    },
    {
      id: 3,
      path: "/activity/:hostname",
    },
  ];

  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
