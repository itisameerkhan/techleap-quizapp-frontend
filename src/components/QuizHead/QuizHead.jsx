import "./QuizHead.scss";
import { Link } from "react-router-dom";

const QuizHead = ({ data }) => {
  const { quizType,_id } = data;

  return (
    <Link to={`/quiz/${_id}`} className="quiz-head">
      <h2>{quizType}</h2>
    </Link>
  );
};

export default QuizHead;
