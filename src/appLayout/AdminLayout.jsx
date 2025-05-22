import { Link, Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AdminLayout = () => {
  return (
    <div>
      <Navbar role="admin" />

      {/* Sidebar */}
      <div
        className="bg-dark text-white vh-100 p-3"
        style={{
          width: "200px",
          position: "fixed",
          top: "56px",
          left: 0,
          overflowY: "auto",
          height: "calc(100vh - 56px)",
        }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/users" className="nav-link text-white">
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/videos" className="nav-link text-white">
              Video
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/products" className="nav-link text-white">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/site-settings" className="nav-link text-white">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div style={{ marginLeft: "200px", paddingTop: "26px", paddingLeft: "20px", paddingRight: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
