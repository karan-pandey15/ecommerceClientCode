import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCartTotal } from "../features/cartSlice";

import React from "react";
import "./navbar.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";

const Navbar = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const items = useSelector((state) => state.allCart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          1<span className="logo-text">karan</span>
          <span className="yellow-circle">
            <i class="fa-solid fa-circle"></i>
          </span>
          <h2>{cart.length}</h2>
        </div>
        <MDBContainer fluid>
          <span>
            <Link to="/allproduct">All Product </Link>
          </span>
          <MDBBtn color="light">
            <Link to="/cart">Cart({totalQuantity})</Link>
          </MDBBtn>
        </MDBContainer>

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
        <div className="sign-in">
          <input type="button" value="Sign in" className="sign-btn" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React, { useEffect } from "react";
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBBtn,
// } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { getCartTotal } from "../features/cartSlice";

// export default function App() {

// const { cart, totalQuantity } = useSelector((state) => state.allCart);

// const dispatch = useDispatch();
// useEffect(() => {
//   dispatch(getCartTotal());
// }, [cart]);

//   return (
//     <MDBNavbar light bgColor="light">
//       <MDBContainer fluid>
//         <MDBNavbarBrand>Navbar</MDBNavbarBrand>
//         <span>
//           <Link to="/">All Product </Link>
//         </span>
//         <MDBBtn color="light">
//           <Link to="/cart">Cart({totalQuantity})</Link>
//         </MDBBtn>
//       </MDBContainer>

//     </MDBNavbar>

//   );
// }
