import { React, createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { useNavigate } from "react-router-dom";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import { useState } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  // const AddDetails = createContext(null);
  const [state, setState] = useState({ order_data: "" });
  let { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const items = useSelector((state) => state.allCart.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
    console.log("ITEMS data", items);
    console.log("CART data ", cart);
    setState(cart);
  }, [cart]);

  // checkout logic start here

  const handleCheckOut = async () => {
    let response = await fetch("/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: items,
      }),
    });
    if (response.status !== 200) {
      alert("opps something is wrong");
    } else {
      alert("data send to database..");
      navigate("/");
    }
  };

  // const handleCheckOut = async (e) => {
  //   // let data = cart;
  //   e.preventDefault();
  //   await fetch("http://localhost:3000/orderData", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       order_data: cart,
  //     }),
  //   });
  //   // const data = await response.json();
  //   // await response.json();
  //   console.log("data send to database", items);
  //   window.alert("data send to database...");
  //   navigate("/");
  // };

  // let data = useCart();
  // let data = items;
  // let dispatch = useDispatchCart();

  // let data = useCart();
  // let dispatch = useDispatchCart();

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className=" mb-4">
                <div className="card-header py-3">
                  {cart.length === 0 ? (
                    <h1 style={{ color: "red" }}>Opps card is empty!</h1>
                  ) : (
                    <h5 className="mb-0 card">Cart - {cart.length} items</h5>
                  )}
                </div>
                {/* <AddDetails.Provider value={state}> */}
                <div className="container">
                  {cart?.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.img}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                        <label>{data.title}</label>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className="btn btn-primary px-3 me-2"
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                              style={{ marginLeft: "10px" }}
                            />
                            <label className="form-label ms-3" for="form1">
                              Quantity
                            </label>
                            <label>$-{data.price}</label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Total Quantity
                  <span>{totalQuantity}</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>{totalPrice}</strong>
                  </span>
                </li>
              </ul>
              {cart.length > 0 ? (
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleCheckOut}
                >
                  Go to checkout
                </button>
              ) : (
                <Link className="btn btn-danger" to="/shop">
                  Go To Shop
                </Link>
              )}
            </div>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>
    </div>
  );
};

export default CartPage;
