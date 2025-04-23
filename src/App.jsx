import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const authenticateFunction = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/authenticate`,
        { withCredentials: true }
      );

      if (!response.data.success) {
        navigate("/");
      } else {
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
    console.log("authentciate function called");
    authenticateFunction();
  },[]);

  return (
    <div className="app">
      {location.pathname != "/" && <Header />}
      <Outlet />
    </div>
  );
};

export default App;
