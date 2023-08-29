import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="wrapper_Container">
        <div className="wrapper_secondContainer">
          <div className="wrapper_data">
            <h4>
              Subscribe for a <span> 35% Discount</span>
            </h4>
            <p className="container_para">
              Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit
              amet mi vulputate consectetur. Donec auctor interdum purus, ac
              finibus massa bibendum nec.
            </p>
          </div>
          <div className="input_data">
            <input type="text" placeholder="Your E-mail" />
            <button>Subscribe</button>
          </div>
        </div>
        {/* this is third wrapper container with black color  */}

        <div className="wrapper_thirdContainer">
          {/* footer logo with data   */}
          <div className="content_containerBox">
            <div className="container_logoContainer">
              <img
                src="https://preview.colorlib.com/theme/amado/img/core-img/logo2.png.webp"
                alt=""
              />
              {/* <h2>AnandFurn <span>.</span> </h2> */}
              <p>
                Copyright ©2023 All rights reserved | This template is made with
                by Colorlib
              </p>
              <button className="menuBtn menuIcon">
                <li>|||</li>
              </button>
            </div>

            {/* footer li with name   */}

            <div className="container_listItem">
              <ul>
                <li className="activeLi">HOME</li>
                <li>SHOP</li>
                <li>PRODUCT</li>
                <li>CART</li>
                <li>CHECKOUT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
