import { useEffect, useState } from "react";
import "./Result.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import QuizComp from "../QuizComp/QuizComp";
import Loader from "../Loader/Loader";

const Result = () => {
  const answer = useSelector((store) => store.answer);
  const [data, setData] = useState(null);
  const questionMain = useSelector((store) => store.quiz);
  const questions = questionMain.content;

  const fetchAnswers = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/quiz/get/answer/${answer.questionId}`,
      answer,
      {
        withCredentials: true,
      }
    );

    setData(response.data);
  };

  useEffect(() => {
    fetchAnswers();
  }, []);


  return (
    <div className="result">
      <h1>Result</h1>
      <div className="r-d-1">
        <h1>your score {data?.numberOfCorrect}/10</h1>
      </div>
      <div className="r-d-2">
        {questions.map((data, index) => (
          <QuizComp
            key={data.key}
            data={data}
            index={index}
            questionId={questionMain._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
