import { useState } from "react";
import "./AddQuiz.scss";
import axios from "axios";

const AddQuiz = () => {
  const [questions, setQuestions] = useState({
    iteration: 0,
    quizType: "",
    content: [],
  });

  const [quiz, setQuiz] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  });

  const setTitle = () => {
    if (questions.quizType === "") return;
    setQuestions({
      ...questions,
      iteration: questions.iteration + 1,
    });
  };

  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setQuestions({
      ...questions,
      content: [...questions.content, quiz],
      iteration: questions.iteration + 1,
    });

    setQuiz({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
    });
  };

  const handleSubmitQuestions = async () => {
    try {
      console.log(questions);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/quiz/add`,
        questions,
        {
          withCredentials: true,
        }
      );
    } catch (e) {
      console.log(e);
    }

    setQuestions({
      iteration: 0,
      quizType: "",
      content: [],
    });

    setQuiz({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctAnswer: "",
    });
  };

  return (
    <div className="add-quiz">
      <div className="add-quiz-main">
        <h1>Add Quiz</h1>
        <div className="quiz-main">
          {questions.iteration === 0 && (
            <div className="quiz-main-0">
              <label>title of the quiz</label>
              <input
                type="text"
                placeholder="title of the quiz"
                required
                onChange={(e) =>
                  setQuestions({
                    ...questions,
                    quizType: e.target.value,
                  })
                }
              />
              <button onClick={setTitle}>Submit</button>
            </div>
          )}{" "}
          {questions.iteration > 0 && questions.iteration <= 10 && (
            <div className="quiz-main-1">
              <h2>quiz {questions.iteration}</h2>
              <textarea
                name="question"
                className="ta-q"
                onChange={handleChange}
                value={quiz.question}
              ></textarea>
              <div className="ta-o">
                <label>option 1</label>
                <input
                  type="text"
                  placeholder="option1"
                  name="option1"
                  onChange={handleChange}
                  value={quiz.option1}
                />
              </div>
              <div className="ta-o">
                <label>option 2</label>
                <input
                  type="text"
                  placeholder="option2"
                  name="option2"
                  onChange={handleChange}
                  value={quiz.option2}
                />
              </div>
              <div className="ta-o">
                <label>option 3</label>
                <input
                  type="text"
                  placeholder="option3"
                  name="option3"
                  onChange={handleChange}
                  value={quiz.option3}
                />
              </div>
              <div className="ta-o">
                <label>option 4</label>
                <input
                  type="text"
                  placeholder="option4"
                  name="option4"
                  onChange={handleChange}
                  value={quiz.option4}
                />
              </div>
              <div className="ta-o">
                <label>correctAnswer</label>
                <input
                  type="text"
                  placeholder="correctAnswer"
                  name="correctAnswer"
                  onChange={handleChange}
                  value={quiz.correctAnswer}
                />
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
          {questions.iteration == 11 && (
            <div className="quiz-main-2">
              <h1>Your questions has been added</h1>
              <button onClick={handleSubmitQuestions}>submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
