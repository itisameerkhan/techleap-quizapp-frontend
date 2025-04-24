import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-main">
      <div className="container">
        <div className="loader"></div>
        <div className="loader"></div>
        <div className="loader"></div>
      </div>
      <h2>loading please wait...</h2>
    </div>
  );
};

export default Loader;
