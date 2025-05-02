import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const authenticateFunction = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/authenticate`,
        { withCredentials: true }
      );

      if (!response.data.success) {
        navigate("/");
      } else {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/get/info`,
          { withCredentials: true }
        );

        dispatch(addUser(response.data.data));

        if (location.pathname === "/") {
          navigate("/home");
        } else {
          navigate(`${location.pathname}`);
        }
      }
    } catch (e) {
      console.log(e);
    }
  };



  useEffect(() => {
    authenticateFunction();
  }, []);

  return (
    <div className="app">
      {location.pathname != "/" && <Header />}
      <Outlet />
    </div>
  );
};

export default App;
