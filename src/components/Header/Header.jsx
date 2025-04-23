import axios from "axios";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/userSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/user/logout`,
        { withCredentials: true }
      );

      dispatch(removeUser());

      navigate("/");

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="header">
      <div className="header-1">
        <Link to={"/home"}>
          <h1 className="logo-main">Quixx</h1>
        </Link>
        <div className="h-1-1">
          <p>welcome, {user?.name || "loading..."}</p>
          <div className="h-1-1-d">
            <i className="fa-solid fa-bars i-menu"></i>
            <div>
              <p>
                <i className="fa-solid fa-user"></i>profile
              </p>
              <p>
                <i className="fa-solid fa-chart-simple"></i> Dashboard
              </p>
              <Link to={"/add-quiz"}>
                <p>
                  <i className="fa-solid fa-notes-medical"></i> Add Quiz
                </p>
              </Link>
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
