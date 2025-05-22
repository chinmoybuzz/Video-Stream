import { Link } from "react-router";

const Navbar = () => {
  const loginData = JSON.parse(localStorage.getItem("auth"));
  console.log("login data", loginData);

  return (
    <>
      {/* // <!-- Navbar --> */}
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
    </>
  );
};

export default Navbar;
