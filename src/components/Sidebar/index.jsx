import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const textSidebar = [
    {
      id: 1,
      path: "/",
      title: "Activity",
    },
    {
      id: 2,
      path: "/dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <>
      <div>
        <div
          className="d-flex flex-column flex-shrink-0 p-3"
          style={{
            width: "280px",
            minHeight: "100%",
            background: "#f6ae8e",
          }}
        >
          <Link
            to={"/"}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none"
          >
            <svg className="bi pe-none me-2" width="40" height="32">
              <use xlink:href="#bootstrap" />
            </svg>
            <span className="fs-4" style={{ color: "black" }}>
              Raghib
            </span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            {textSidebar.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`nav-link text-black ${
                  location.pathname === link.path
                    ? "active-custom text-white"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
          <hr />
          <div className="dropdown">
            <Link
              href="#"
              className="d-flex align-items-center text-black text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>mdo</strong>
            </Link>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
              <li>
                <Link className="dropdown-item" href="#">
                  New project...
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
