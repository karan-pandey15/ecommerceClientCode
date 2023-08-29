import React, { useEffect, useState } from "react";
// import ShopCard from "../shopCard/ShopCard";
import shopData from "./shopdata.json";
import "./shopProduct.css";
import "./shopCard.css";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

// import Catagories from "./catagories";

export default function ShopProduct() {
  let cart_className = `fa-solid fa-cart-shopping`;
  let star_className = `fa-solid fa-star`;
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState(shopData);

  useEffect(() => {
    setProducts(shopData);
  }, []);

  // const filterProducts = (categoryItem) => {
  //   if (categoryItem === "All") {
  //     setProducts(shopData);
  //     return;
  //   }

  //   const filteredProducts = shopData.filter((currentProduct) => {
  //     return currentProduct.category === categoryItem;
  //   });
  //   setProducts(filteredProducts);
  // };
  // const filterByCheckbox = (brandItem) => {
  //   const filterdCheckbox = shopData.filter((currentBrand) => {
  //     return currentBrand.brand === brandItem;
  //   });
  //   setProducts(filterdCheckbox);
  // };

  const pagination = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= products.length / 5 &&
      pageNumber !== page
    )
      setPage(pageNumber);
  };

  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Catagories
        filterProducts={filterProducts}
        filterByCheckbox={filterByCheckbox}
      /> */}
      <div className="shopProducts-container">
        <>
          {items.slice(page * 6 - 6, page * 6).map((item, index) => {
            return (
              <>
                <div className="shopCard_container m-2" key={item.id}>
                  <div className="image_container">
                    <img className="image" src={item.img} alt="Not found" />
                  </div>
                  <div className="info_container">
                    <div className="text_container">
                      <h2 className="big_text">{item.price}</h2>
                      <p className="small_text">{item.title}</p>
                    </div>
                    <div className="icon_container">
                      <div className="star_container">
                        <i className={star_className}></i>
                        <i className={star_className}></i>
                        <i className={star_className}></i>
                        <i className={star_className}></i>
                        <i className={star_className}></i>
                      </div>
                      <div className="cart_container">
                        <div
                          className={cart_className}
                          onClick={() => dispatch(addToCart(item))}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
        <div className="pagination">
          {Array.from({ length: Math.ceil(shopData.length / 6) }).map(
            (_, i) => {
              return (
                <button
                  key={i + 1}
                  onClick={() => pagination(i + 1)}
                  className={`number ${page === i + 1 ? "selected_page" : ""}`}
                >
                  {i + 1}
                </button>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
// } from "mdb-react-ui-kit";

// import { useSelector, useDispatch } from "react-redux";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { addToCart } from "../features/cartSlice";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// import { addToCart } from "../features/cartSlice";

// export default function App() {
//   const items = useSelector((state) => state.allCart.items);

//   const dispatch = useDispatch();

//   return (
//     <div className="m-2">
//       {/* <MDBContainer>
//         <MDBRow className="mb-3">
//           {items.map((item) => (
//             <MDBCol key={item.id} size="md">
//               <MDBCard>
//                 <MDBCardImage src={item.img} position="top" alt="..." />
//                 <MDBCardBody>
//                   <MDBCardTitle>{item.title}</MDBCardTitle>
//                   <MDBCardText>{item.price}</MDBCardText>
//                   <MDBBtn onClick={() => dispatch(addToCart(item))}>
//                     Add to Cart
//                   </MDBBtn>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           ))}
//         </MDBRow>
//       </MDBContainer> */}

//       {items.map((item) => (
//         <Card>
//           <Card.Img variant="top" src={item.img} alt="img" />
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//             <Button variant="primary" onClick={() => dispatch(addToCart(item))}>
//               AddToCart btn
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </div>
//   );
// }
