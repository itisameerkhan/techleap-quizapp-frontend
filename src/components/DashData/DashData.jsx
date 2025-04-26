import "./DashData.scss";

const DashData = ({ data }) => {
  return (
    <div className="dash-data">
      <h2>{data.name}</h2>
      <h2>{data.marks} XP</h2>
    </div>
  );
};

export default DashData;
