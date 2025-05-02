import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import Loader from "./components/Loader/Loader";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const authenticateFunction = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/authenticate`,
        { withCredentials: true }
      );

      if (!response.data.success) {
        navigate("/");
        setIsLoading(false);
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
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);

      console.log(e);
    }
  };

  if(isLoading) return <Loader />;

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
