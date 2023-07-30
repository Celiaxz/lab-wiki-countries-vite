import { Link, NavLink, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <NavLink to="/" className={({ isActive }) => (isActive ? "selected" : "")}>
      Wiki Countries
    </NavLink>
  );
}

export default Navbar;
