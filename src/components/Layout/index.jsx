import React, { useEffect } from "react";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Topbar from "../Topbar";
import { useLocation, useParams } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const { id } = useParams();

  const navTitles = [
    {
      path: "/",
      mainTitle: "Activity",
      subTitle: "This is the Activity page.",
    },
    {
      path: "/dashboard",
      mainTitle: "Dashboard",
      subTitle: "This is the Dashboard page.",
    },
  ];

  const activeNav = navTitles.find((nav) => nav.path === location.pathname) || {
    mainTitle: "",
    subTitle: "",
  };

  return (
    <div className="d-flex flex-nowrap">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <Navbar textSatu={activeNav.mainTitle} />
        <Topbar textSatu={activeNav.subTitle} />
        <main className="main-content">
          <div className="p-3" style={{ flex: "1 0 auto" }}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
