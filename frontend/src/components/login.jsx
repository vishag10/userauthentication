import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiPath from "./path";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiPath()}/login`, data);
      if (res.status === 200) {
        const { token, msg } = res.data; 
        if (token) {
          console.log("Token received:", token);
          sessionStorage.setItem("token", token);
          alert(msg || "Login successful!");
          setData({ email: "", password: "" });
          navigate("/");
        } else {
          alert("Login successful, but no token was received.");
        }
      } else {
        alert(res.data?.msg || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      const errorMsg = error.response?.data?.msg || "An error occurred during login. Please try again.";
      alert(errorMsg);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">MyApp</div>
        </div>
      </nav>

      <div className="form-container">
        <h2>Login</h2>
        <form className="login-form" id="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              value={data.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
              value={data.password}
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
        <span>
          Don't have an account?{" "}
          <Link to={"/register"}>
            <span className="click">Click here</span>
          </Link>
          <Link to={"/"}>
            <span className="btna">Home</span>
          </Link>
        </span>
      </div>
    </>
  );
}

export default Login;
