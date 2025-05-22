import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h2> Footer</h2>
    </div>
  );
};

export default AppLayout;
