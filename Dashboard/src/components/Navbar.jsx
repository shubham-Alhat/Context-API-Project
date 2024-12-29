import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div
        id="navbarBox"
        className="w-full flex justify-around px-6 py-3 mb-16 "
      >
        <div className="dark:bg-black text-2xl font-bold flex justify-evenly items-center gap-32">
          <NavLink
            to="/home"
            // The end attribute ensures that the isActive property is true only when the route matches exactly.
            end
            className={({ isActive }) => {
              return isActive
                ? "text-blue-400 dark:text-white dark:border-b-2 dark:border-white "
                : "text-gray-400 ";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/home/profile"
            className={({ isActive }) => {
              return isActive
                ? "text-blue-400 dark:text-white dark:border-b-2 dark:border-white "
                : "text-gray-400 ";
            }}
          >
            Profile
          </NavLink>
          <NavLink
            to="/home/settings"
            className={({ isActive }) => {
              return isActive
                ? "text-blue-400 dark:text-white dark:border-b-2 dark:border-white "
                : "text-gray-400 ";
            }}
          >
            Settings
          </NavLink>
        </div>
        <button
          className="py-2 px-3 bg-blue-500 font-semibold rounded-md  hover:bg-blue-600"
          onClick={() => navigate("/logout")}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Navbar;
