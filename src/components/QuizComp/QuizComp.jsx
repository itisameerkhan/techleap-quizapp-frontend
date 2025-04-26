import { useSelector } from "react-redux";
import "./QuizComp.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const QuizComp = ({ data, index, questionId }) => {
  const [colors, setColors] = useState({
    o1: "black",
    o2: "black",
    o3: "black",
    o4: "black",
  });

  const yourAnswers = useSelector((store) => store.answer);

  const fetchAnswers = async () => {
    const colorsValue = {
      o1: "black",
      o2: "black",
      o3: "black",
      o4: "black",
    };

    const indexAnswer1 = yourAnswers[index.toString()];

    if (indexAnswer1 == data.option1) {
      colorsValue.o1 = "red";
    } else if (indexAnswer1 == data.option2) {
      colorsValue.o2 = "red";
    } else if (indexAnswer1 == data.option3) {
      colorsValue.o3 = "red";
    } else if (indexAnswer1 == data.option4) {
      colorsValue.o4 = "red";
    }

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/get-answer/${questionId}`
    );

    const correctAnswers = response.data.data.answers;
    const indexAnswer = correctAnswers[index.toString()];

    if (indexAnswer == data.option1) {
      colorsValue.o1 = "green";
    } else if (indexAnswer == data.option2) {
      colorsValue.o2 = "green";
    } else if (indexAnswer == data.option3) {
      colorsValue.o3 = "green";
    } else if (indexAnswer == data.option4) {
      colorsValue.o4 = "green";
    }

    setColors(colorsValue);
  };

  useEffect(() => {
    fetchAnswers();
  }, []);

  return (
    <div className="quiz-comp">
      <h2>{data.question}</h2>
      <div className="q-c-2">
        <p style={{ backgroundColor: colors.o1 }}>{data.option1}</p>
        <p style={{ backgroundColor: colors.o2 }}>{data.option2}</p>
        <p style={{ backgroundColor: colors.o3 }}> {data.option3}</p>
        <p style={{ backgroundColor: colors.o4 }}>{data.option4}</p>
      </div>
    </div>
  );
};

export default QuizComp;
