//packages
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </header>
      <main>
        <Outlet />
      </main>

      <footer>2023</footer>
    </>
  );
};

export default Layout;
