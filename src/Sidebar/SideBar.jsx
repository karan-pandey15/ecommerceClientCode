import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "../navBar/navbar.css";
import { useSelector, useDispatch } from "react-redux";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { getCartTotal } from "../features/cartSlice";

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const Navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    Navigate("/login");
  };

  const menuItem = [
    {
      path: "/",
      name: "HOME",
      icon: "x",
    },
    {
      path: "/shop",
      name: "SHOP",
      icon: "|||",
    },
    {
      path: "/product",
      name: "PRODUCT",
      icon: "==",
    },
    {
      path: "/cart",
      name: "CART",
      icon: "==",
    },
    {
      path: "/checkout",
      name: "CHECKOUT",
      icon: "==",
    },
    // {
    //   path: "/order",
    //   name: "ORDER",
    //   icon: "==",
    // },
  ];

  const { cart } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  });

  function NavigateCart() {
    Navigate("/cart");
  }

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <span className="logo-text">Amand</span>
          <span className="yellow-circle">
            <i class="fa-solid fa-circle"></i>
          </span>
        </div>
        <div className="search-bar">
          <input
            type="search"
            name="search"
            id="search"
            className="search-field"
            placeholder="Search"
          />
          <input type="button" value="Search" className="search-btn" />
        </div>

        {!localStorage.getItem("authToken") ? (
          <form className="d-flex">
            <Link className="btn bg-white text-success mx-1 " to="/login">
              Login
            </Link>
            <Link
              className="btn bg-white text-success mx-1 signnone "
              to="/sign"
            >
              Signup
            </Link>
          </form>
        ) : (
          <button onClick={handleLogout} className="btn bg-white text-success">
            Logout
          </button>
        )}

        <div style={{ marginLeft: isOpen ? "50PX" : "0PX" }} className="bars">
          <i
            className="fa fa-bars nonebars "
            style={{ cursor: "pointer" }}
            onClick={toggle}
            aria-hidden="true"
          ></i>

          {cart.length > 0 ? (
            <div
              onClick={NavigateCart}
              style={{ marginLeft: "5px", cursor: "pointer" }}
            >
              <i
                class="fa fa-cart-plus"
                style={{ fontSize: "22px", color: "gray" }}
                aria-hidden="true"
              ></i>
              <span style={{ fontSize: "18px", color: "gray" }}>
                {cart.length}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="containerBox">
        <div
          className="sidebar"
          style={{
            minHeight: "140vh",
            width: isOpen ? "340px" : "0",
            cursor: "pointer",
          }}
        >
          <div className="top_Section">
            <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
              <img
                src="https://preview.colorlib.com/theme/amado/img/core-img/logo.png.webp"
                alt="imgLogo"
              />
            </h1>
          </div>
          {menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                {/* <div className="icon">{item.icon}</div> */}
                <div className="link_text">
                  <ul style={{ display: isOpen ? "block" : "none" }}>
                    <li>{item.name}</li>
                  </ul>
                </div>
              </NavLink>
            );
          })}

          <div
            className="buttonBox"
            style={{ marginLeft: "40px", display: isOpen ? "" : "none" }}
          >
            <div className="discount">
              <input
                type="button"
                value="%Discount%"
                className="discount-btn"
              />
            </div>
            <div className="new-this-week">
              <input
                type="button"
                value="New This Week"
                className="new-this-week-btn"
              />
            </div>
          </div>

          <ul
            className="social-icons"
            style={{ display: isOpen ? "" : "none" }}
          >
            <li>
              <Link to={"/instagram"}>
                <i class="fa-brands fa-instagram social-icon"></i>
              </Link>
            </li>
            <li>
              <Link to={"/facebook"}>
                <i class="fa-brands fa-facebook social-icon"></i>
              </Link>
            </li>
            <li>
              <Link to={"/linkedin"}>
                <i class="fa-brands fa-linkedin social-icon"></i>
              </Link>
            </li>
            <li>
              <Link to={"/github"}>
                <i class="fa-brands fa-github social-icon"></i>
              </Link>
            </li>
          </ul>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
}
