import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const AdminAuthWrapper = () => {
  // const isAdminLoggedIn = JSON.parse(localStorage.getItem("auth")).roles.includes("Admin");

  // const location = useLocation();
  // const loginPage = location.pathname === "/admin";
  // // console.log("isAdminLoggedIn", isAdminLoggedIn);
  // // if()
  // // allow login page even if not logged in
  // if (!isAdminLoggedIn && loginPage) {
  //   return <Navigate to="/admin" replace />;
  // }
  // if (isAdminLoggedIn && loginPage) {
  //   return <Navigate to="/admin/dashboard" replace />;
  // }
  // console.log("working");
  // return <Outlet />;
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
