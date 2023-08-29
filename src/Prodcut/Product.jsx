import React, { useState } from "react";
// import "./selImg";
import "./product.css";

export default function Product() {
  const imgArr = [
    {
      img: "https://images.unsplash.com/photo-1547587091-f883cf8f0c12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdoaXRlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    },
    {
      img: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGUlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    },
  ];

  const [img, setImg] = useState(imgArr[0].img);
  return (
    <>
      <div className="product_container">
        <div className="product">
          <img className="main_img" id="imageBox" src={img} alt="img" />

          <div class="product-small-img">
            {imgArr.map((image, ind) => {
              return (
                <img
                  src={image.img}
                  alt={image.ind}
                  key={ind}
                  onClick={() => setImg(image.img)}
                />
              );
            })}
          </div>
        </div>

        <div className="product_text_container">
          <div></div>
          <div>
            <h1>White Modern Chair</h1>
            {/* <p>in Stock</p> */}
            <br /> <br />
            <p className="productpara">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              quae eveniet culpa officia quidem mollitia impedit iste asperiores
              nisi reprehenderit consequatur, autem, nostrum pariatur enim?
            </p>
            <div className="product_select">
              Qty
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <button className="product_button">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
