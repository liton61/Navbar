import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="bg-pink-200 p-7">
      <div className="lg:flex justify-between items-center">
        <h1 className="hidden lg:block">Logo</h1>
        {open ? (
          <div onClick={handleClose} className="bar1">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div
            onClick={handleOpen}
            className={`bar2 ${open ? "" : "activeBar"}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <ul
          className={`flex justify-between gap-7 navItems ${
            open ? "" : "activeMenu"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
