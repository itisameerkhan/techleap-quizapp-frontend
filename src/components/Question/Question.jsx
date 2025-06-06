import { useState } from "react";
import "./Question.scss";
import { useSelector, useDispatch } from "react-redux";
import Result from "../Result/Result";
import { addAnswers } from "../../utils/answerSlice";

const Question = ({ data, setQuestionIndex, questionIndex }) => {
  const [colors, setColors] = useState({
    c1: "#a100ff",
    c2: "#a100ff",
    c3: "#a100ff",
    c4: "#a100ff",
  });

  const dispatch = useDispatch();
  const currentQuizzes = useSelector((store) => store.quiz);

  const [answers, setAnswers] = useState({
    buttonClicked: "",
    result: false,
    questionId: currentQuizzes._id,
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    0: "",
    7: "",
    8: "",
    9: "",
  });


  const handleClick = (e) => {
    if (e.target.name == "1") {
      setColors({
        c1: "#1B56FD",
        c2: "#a100ff",
        c3: "#a100ff",
        c4: "#a100ff",
      });
    } else if (e.target.name == "2") {
      setColors({
        c2: "#1B56FD",
        c1: "#a100ff",
        c3: "#a100ff",
        c4: "#a100ff",
      });
    } else if (e.target.name == "3") {
      setColors({
        c3: "#1B56FD",
        c2: "#a100ff",
        c1: "#a100ff",
        c4: "#a100ff",
      });
    } else if (e.target.name == "4") {
      setColors({
        c4: "#1B56FD",
        c2: "#a100ff",
        c3: "#a100ff",
        c1: "#a100ff",
      });
    }

    setAnswers({
      ...answers,
      buttonClicked: e.target.name,
      [questionIndex.index]: e.target.value,
    });
  };

  const handleSave = () => {
    if (answers[questionIndex.index] === "") {
      return;
    }
    setColors({
      c1: "#a100ff",
      c2: "#a100ff",
      c3: "#a100ff",
      c4: "#a100ff",
    });

    setQuestionIndex({ index: questionIndex.index + 1 });

    if (answers[questionIndex.index] != "") {
      const answer = answers[questionIndex.index + 1];
      const currentQuiz = currentQuizzes.content[questionIndex.index + 1];

      const option =
        answer == currentQuiz.option1
          ? 1
          : answer == currentQuiz.option2
          ? 2
          : answer == currentQuiz.option3
          ? 3
          : answer == currentQuiz.option4
          ? 4
          : null;

      if (option == 1) {
        setColors({
          c1: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 2) {
        setColors({
          c2: "#1B56FD",
          c1: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 3) {
        setColors({
          c3: "#1B56FD",
          c2: "#a100ff",
          c1: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 4) {
        setColors({
          c4: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c1: "#a100ff",
        });
      }
    }
  };
  

  const handleSubmit = async () => {
    setAnswers({
      ...answers,
      result: true,
    });
    
    dispatch(addAnswers(answers));
  };

  const handleLeftClick = () => {
    if (answers[questionIndex.index] === "") {
      return;
    }

    setQuestionIndex({ index: questionIndex.index - 1 });

    if (answers[questionIndex.index] != "") {
      const answer = answers[questionIndex.index - 1];
      const currentQuiz = currentQuizzes.content[questionIndex.index - 1];

      const option =
        answer == currentQuiz.option1
          ? 1
          : answer == currentQuiz.option2
          ? 2
          : answer == currentQuiz.option3
          ? 3
          : answer == currentQuiz.option4
          ? 4
          : null;

      if (option == 1) {
        setColors({
          c1: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 2) {
        setColors({
          c2: "#1B56FD",
          c1: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 3) {
        setColors({
          c3: "#1B56FD",
          c2: "#a100ff",
          c1: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 4) {
        setColors({
          c4: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c1: "#a100ff",
        });
      }
    }
  };

  const handleRightClick = () => {
    if (answers[questionIndex.index] === "") {
      return;
    }

    setColors({
      c1: "#a100ff",
      c2: "#a100ff",
      c3: "#a100ff",
      c4: "#a100ff",
    });

    if (answers[questionIndex.index] != "") {
      const answer = answers[questionIndex.index + 1];
      const currentQuiz = currentQuizzes.content[(questionIndex.index + 1).toString()];

      const option =
        answer == currentQuiz.option1
          ? 1
          : answer == currentQuiz.option2
          ? 2
          : answer == currentQuiz.option3
          ? 3
          : answer == currentQuiz.option4
          ? 4
          : null;

      if (option == 1) {
        setColors({
          c1: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 2) {
        setColors({
          c2: "#1B56FD",
          c1: "#a100ff",
          c3: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 3) {
        setColors({
          c3: "#1B56FD",
          c2: "#a100ff",
          c1: "#a100ff",
          c4: "#a100ff",
        });
      } else if (option == 4) {
        setColors({
          c4: "#1B56FD",
          c2: "#a100ff",
          c3: "#a100ff",
          c1: "#a100ff",
        });
      }
    }

    setQuestionIndex({ index: questionIndex.index + 1 });
  };

  if (answers.result) return <Result />;

  return (
    <div className="question-main">
      <div className="question-div">
        <div className="q-m-1">
          {questionIndex.index > 0 && (
            <button className="q-btn-1" onClick={handleLeftClick}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}
          {questionIndex.index < 9 && (
            <button className="q-btn-2" onClick={handleRightClick}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
        </div>
        <div className="q-m-1-a">
          <h2>Question {questionIndex.index + 1}</h2>
        </div>
        <div className="q-m-2">
          <div className="q-m-2-l">
            <h2>{data?.question}</h2>
          </div>
          <div className="q-m-2-r">
            <div className="q-m-2-r-1">
              <button
                name="1"
                style={{ backgroundColor: colors.c1 }}
                onClick={handleClick}
                value={data?.option1}
              >
                {data?.option1}
              </button>
              <button
                name="2"
                style={{ backgroundColor: colors.c2 }}
                onClick={handleClick}
                value={data?.option2}
              >
                {data?.option2}
              </button>
              <button
                name="3"
                style={{ backgroundColor: colors.c3 }}
                onClick={handleClick}
                value={data?.option3}
              >
                {data?.option3}
              </button>
              <button
                name="4"
                style={{ backgroundColor: colors.c4 }}
                onClick={handleClick}
                value={data?.option4}
              >
                {data?.option4}
              </button>
            </div>
          </div>
        </div>
        <div className="q-m-3">
          {questionIndex.index < 9 ? (
            <button onClick={handleSave}>SAVE & CONTINUE</button>
          ) : (
            <button className="q-sub-btn" onClick={handleSubmit}>
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
