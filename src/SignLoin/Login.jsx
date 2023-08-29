import React from "react";
import "./login.css";
import { Link, json, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSub() {
    const res = await fetch(`/loginuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid creedentaials");
    } else {
      window.alert("login successfull");
      localStorage.setItem("authToken", json.authToken);

      console.log(localStorage.getItem("authToken"));
      // const authtoken = localStorage.getItem("authToken");
      localStorage.setItem("userEmail", email);
      navigate("/");
    }
  }

  const emailset = (e) => {
    setEmail(e.target.value);
  };

  const passwordset = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="app">
        <div className="login__container">
          <div className="heading">
            <h3 className="h3__heading">CUSTOMER LOGIN</h3>
          </div>
          <div className="input__fields">
            <div className="input__field-1">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="text"
                name="email"
                className="email__field"
                id="email"
                placeholder="Email ID"
                onChange={emailset}
                value={email}
              />
            </div>
            <div className="input__field-2">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                name="password"
                className="password__field"
                id="password"
                onChange={passwordset}
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="another__fields">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value="Remember me"
                className="checkbox__field"
              />
              <label htmlFor="checkbox">Remember me</label>
              <Link to="/sign" className="new__user" id="signup">
                New User ?
              </Link>
            </div>
            <div className="btn">
              <button type="submit" className="Lgbutton" onClick={onSub}>
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
