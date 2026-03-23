import React, { useState } from 'react';
import { FaShopify, FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Nav.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);
  let items = useSelector(state => state);

  // 🔥 Dynamic Menu Data
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "My Cart", path: "/cart" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className='nav'>

      <div className="top-nav">

        {/* ☰ MENU ICON */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        {/* LOGO */}
        <Link to="/">
          <div className="logo">
            <span> Nik-Shop </span>
            <FaShopify />
          </div>
        </Link>

        {/* SEARCH (desktop only) */}
        <form className='search-box'>
          <input type="text" placeholder='Search Items....' />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </form>

        {/* CART */}
        <Link to="/cart">
          <div className="cart-box">
            <FiShoppingCart />
            <span>{items.cart.length}</span>
          </div>
        </Link>

      </div>

      {/* DESKTOP MENU */}
      <div className="bottom-nav">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <li>{item.name}</li>
          </Link>
        ))}
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <Link 
            key={index} 
            to={item.path}
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>

    </div>
  )
}

export default Nav;