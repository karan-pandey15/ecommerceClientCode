import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

// form code start here

export default function SignIn() {
  const navigate = useNavigate();
  const [credenditals, setCredenitals] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // syntetic event
    // const {name,email,password,location} = credenditals
    const response = await fetch(`/createUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credenditals.name,
        email: credenditals.email,
        phone: credenditals.phone,
        password: credenditals.password,
      }),
    });
    const data = await response.json();
    console.log(data);

    if (response.status === 500 || !data) {
      window.alert("Please full fill all the field");
    } else {
      window.alert("Register successFull");
      navigate("/login", { replace: true });
    }
  };

  const datasub = (event) => {
    // const {name,value} = e.target;
    setCredenitals({
      ...credenditals,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div class="formcontainer">
        <form onSubmit={handleSubmit}>
          <i class="fas fa-paper-plane"></i>

          <div class="inputGroupdata">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              onChange={datasub}
              value={credenditals.name}
              id="contact-name"
            />
            <span id="name-error"></span>
          </div>

          <div class="inputGroupdata">
            <label>Phone No.</label>
            <input
              placeholder="123 456 7890"
              name="phone"
              onChange={datasub}
              value={credenditals.phone}
              type="number"
              id="contact-phone"
            />
            <span id="phone-error"></span>
          </div>
          <div class="inputGroupdata">
            <label>Email Id</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={datasub}
              value={credenditals.email}
              id="contact-email"
            />
            <span id="email-error"></span>
          </div>

          <div class="inputGroupdata">
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Your Password"
              name="password"
              onChange={datasub}
              value={credenditals.password}
              id="contact-password"
            />
          </div>
          <button className="btnClass" variant="primary" type="submit">
            Submit
          </button>
          <span id="subit-error"></span>
        </form>
      </div>
    </div>
  );
}
