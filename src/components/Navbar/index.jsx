import React from "react";

const Navbar = ({ textSatu, textDua }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ background: "#6266c4" }}
      >
        <div className="container-fluid">
          <h2 className="navbar-brand m-0 text-light">{textSatu}</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h3 className="nav-link m-0 text-light" aria-current="page">
                  {textDua}
                </h3>
              </li>
              {/* <li className="nav-item">
                <h3 className="nav-link">Features</h3>
              </li>
              <li className="nav-item">
                <h3 className="nav-link">Pricing</h3>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
