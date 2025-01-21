import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const username = useSelector((state) => state.auth.authData?.username);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => navigate("/")}>
          <strong>Members Dashboard</strong>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-light">
                    Welcome, <strong>{username || "User"}</strong>
                  </span>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    onClick={() => navigate("/create")}
                  >
                    Create Task
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch({ type: "LOGOUT" });
                      navigate("/login");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="btn btn-light me-2"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/signup")}
                  >
                    Sign Up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
