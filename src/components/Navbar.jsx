import { Link } from "react-router";

const Navbar = ({ role = "user" }) => {
  const loginData = JSON.parse(localStorage.getItem("auth"));

  return (
    <>
      {/* // <!-- Navbar --> */}
      {role === "user" ? (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" width="30" alt="YouTube Logo" />
              YouTube
            </Link>
            <form className="d-flex mx-auto" style={{ width: " 40%" }}>
              <input className="form-control me-2" type="search" placeholder="Search" />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>
            <div>
              {loginData ? (
                <Link className="btn btn-light rounded-circle img-fluid" to={"/profile"}>
                  {loginData.name}
                </Link>
              ) : (
                <button className="btn btn-light">Login</button>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Admin
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  {loginData ? (
                    <Link className="btn btn-light rounded-circle img-fluid" to={"/admin/profile"}>
                      {loginData.name}
                    </Link>
                  ) : (
                    <button className="btn btn-light">Login</button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
