import { useEffect, useState } from "react";
import "./Dashboard.scss";
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import DashData from "../../components/DashData/DashData";

const Dashboard = () => {
  const [data, setData] = useState(null);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/get-leaderboard`
      );
      setData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        {data
          .sort((a, b) => b.marks - a.marks)
          .map((data) => (
            <DashData key={data._id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
