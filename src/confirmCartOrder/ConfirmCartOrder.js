import React from "react";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
export default function Cart() {
  const handleCheckOut = async () => {
    let response = await fetch("/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        // email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    console.log("JSON RESPONSE:::::", response.status);
    if (response.status === 200) {
      dispatch({ type: "DROP" });
    }
  };

  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-white text-center fs-3">
          Opps cart is empty!!
        </div>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  return (
    <>
      {/* {console.log(data)} */}
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md table-responsive-xl ">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-white">{food.name}</td>
                  <td className="text-white">{food.qty}</td>
                  <td className="text-white">{food.size}</td>

                  <td className="text-white">{food.price}</td>
                  <td>
                    <td>
                      <button type="button" className="btn p-0">
                        <i
                          onClick={() => {
                            dispatch({ type: "REMOVE", index: index });
                          }}
                        />
                      </button>{" "}
                    </td>
                  </td>

                  <td>
                    <button type="button" className="btn p-0">
                      <i
                        class="fa fa-trash dekh text-white"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      ></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <h1 className="fs-2 text-white my-5">Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className="btn bg-success mt-5 " onClick={handleCheckOut}>
            Confirm Order
          </button>
        </div>
      </div>
    </>
  );
}
