import axios from "axios";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/logout`,
        { withCredentials: true }
      );

      navigate("/");

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="header">
      <div className="header-1">
        <h1>Quixx</h1>
        <div className="h-1-1">
          <p>welcome, mahamad farzanaa</p>
          <div className="h-1-1-d">
            <i className="fa-solid fa-bars i-menu"></i>
            <div>
              <p>
                <i className="fa-solid fa-user"></i>profile
              </p>
              <p>
                <i className="fa-solid fa-chart-simple"></i> Dashboard
              </p>
              <p onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>logout
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="header-2"></div>
    </div>
  );
};

export default Header;
