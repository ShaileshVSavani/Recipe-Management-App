
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Popover, Button } from "antd";
import { useCookies } from "react-cookie";
import { MenuFoldOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../public/assets/logo.svg";
import "../styles/navbar.css";

import { useSelector } from "react-redux";

const Navbar = () => {
  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const { currentUser } = useSelector((state) => state.user);
  const userName = currentUser?.data?.data?.user?.username || "User";
  const userEmail = currentUser?.data?.data?.user?.email || "example@example.com";

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth/login");
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const userPopoverContent = (
    <div>
      <p style={{ margin: 0 }}>Email: {userEmail}</p>
      <Button type="primary" danger onClick={logout} style={{ marginTop: "10px" }}>
        Logout
      </Button>
    </div>
  );

  return (
    <nav className="navbar">
      <div className={`navbarContainer container ${showMenu ? "showMenu" : ""}`}>
        {/* Logo Section */}
        <div className="logo">
          <img src={logo} alt="App Logo" />
          <h1>Yummy Recipes</h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburgerIcon" onClick={toggleMenu}>
          {showMenu ? <CloseOutlined className="closeIcon" /> : <MenuFoldOutlined className="menuIcon" />}
        </div>

        {/* Menu Items */}
        <div className={`menuItems ${showMenu ? "show" : ""}`}>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/create-recipe" className="navLink">
            Create Recipes
          </Link>
          <Link to="/saved-recipes" className="navLink">
            Saved Recipes
          </Link>
          <Link to="/my-recipes" className="navLink">
            My Recipes
          </Link>
        </div>

        {/* User Profile */}
        <div className="userProfile">
          <Popover content={userPopoverContent} title={`Hello, ${userName}`} placement="bottomRight">
            <span className="userIcon">
              <UserOutlined /> {userName}
            </span>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




