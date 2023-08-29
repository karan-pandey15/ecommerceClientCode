import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import SideBar from "./Sidebar/SideBar";
import Footer from "./FooterSection/Footer";
import Products from "./HomeProduct/Product";
import ShopProduct from "./ShopProduct/ShopProduct";
import Product from "./Prodcut/Product";
import Checkout from "./Checkout/Checkout";
import Cart from "./Cart/Cart";
import Login from "./SignLoin/Login";
import SignIn from "./SignLoin/SignIn";
import Myorder from "./myOrders/Myorder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/shop" element={<ShopProduct />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign" element={<SignIn />}></Route>
            <Route path="/order" element={<Myorder />}></Route>
          </Routes>
        </SideBar>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Navbar";
// import ProductCard from "./components/ProductCard";
// import CartPage from "./components/cartPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<ProductCard />} />
//           <Route path="/cart" element={<CartPage />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
