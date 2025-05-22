import { Navigate, Outlet, useLocation } from "react-router";

const AdminAuthWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin/login";

  let isAdminLoggedIn = false;
  try {
    const auth = JSON.parse(localStorage.getItem("auth"));
    isAdminLoggedIn = auth?.roles?.includes("Admin");
  } catch {
    isAdminLoggedIn = false;
  }
  if (!isAdminLoggedIn && !isLoginPage) {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ Logged in and visiting login page → redirect to dashboard
  if (isAdminLoggedIn && isLoginPage) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  // ✅ All good, render nested routes
  return <Outlet />;
};

export default AdminAuthWrapper;
