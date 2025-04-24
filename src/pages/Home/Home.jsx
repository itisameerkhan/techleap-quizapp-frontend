import { useState, useEffect } from "react";
import "./Home.scss";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import QuizHead from "../../components/QuizHead/QuizHead";

const Home = () => {
  const [quiz, setQuiz] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/get-quiz`,
        { withCredentials: true }
      );

      setQuiz(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!quiz) return <Loader />;

  return (
    <div className="home">
      <h1>Quiz</h1>
      <div className="home-main">
        {quiz.map((data) => (
          <QuizHead key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
