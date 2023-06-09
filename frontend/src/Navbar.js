import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My App
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read">
                List
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Create
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/read">
                    Read
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/edit">
                    Edit
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    Logout
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {isLoggedIn ? null : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
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
