import { useState, useEffect } from "react";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/login`,
          {
            email: user.email,
            password: user.password,
          },
          { withCredentials: true }
        );

        if (!response.data.success) {
          toast.error(response.data.message);
          return;
        }

        dispatch(addUser(response.data.data))

        navigate("/home");
      } else {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/user/new`,
          {
            name: user.name,
            email: user.email,
            password: user.password,
          },
          {
            withCredentials: true,
          }
        );

        if (!response.data.success) {
          const notify = () => {
            toast.error(response.data.message);
          };
          notify();

          return;
        }

        dispatch(addUser(response.data.data))

        navigate("/home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <div className="login-main">
        <h1>{isLogin ? "login" : "Signup"}</h1>
        <div className="login-content">
          {!isLogin && (
            <div className="l-main">
              <label>name</label>
              <input
                type="text"
                placeholder="name"
                onChange={handleChange}
                name="name"
              />
            </div>
          )}
          <div className="l-main">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="l-main">
            <label>password</label>
            <input
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
            />
          </div>
        </div>
        <p className="l-btn-1" onClick={() => setIsLogin(!isLogin)}>
          {!isLogin ? "already having an account? login" : "new user, signup"}
        </p>
        <div className="l-btn-2-c">
          <button className="l-btn-2" onClick={handleSubmit}>
            {Login ? "Login" : "Signup"}
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
