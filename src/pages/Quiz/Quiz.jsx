import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { addQuiz } from "../../utils/quizSlice";

const Quiz = () => {
  const { questionId } = useParams();
  const [questions, setQuestions] = useState(null);
  const [questionIndex, setQuestionIndex] = useState({
    index: 0,
  });
  const dispatch = useDispatch();

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/quiz/${questionId}`,
        { withCredentials: true }
      );
      setQuestions(response.data.data.content);
      dispatch(addQuiz(response.data.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);

  if (!questions) return <Loader />;

  return (
    <div className="quiz-main">
      <Question
        data={questions[questionIndex.index]}
        setQuestionIndex={setQuestionIndex}
        questionIndex={questionIndex}
      />
    </div>
  );
};

export default Quiz;
