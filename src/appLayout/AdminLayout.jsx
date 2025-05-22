import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Navbar</h2>
      <Outlet />
      <h2> Footer</h2>
    </div>
  );
};

export default AdminLayout;
