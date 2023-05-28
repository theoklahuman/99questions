import testQuestionFlow from "./questions.js";
import "./style.css";
import testAnswerFlow from "./answer.js";

const questionSubmitButton = document.querySelector("#question-submit__button");
const submitAnswerButton = document.querySelector("#answer-submit__button");

questionSubmitButton.addEventListener("click", testQuestionFlow);
submitAnswerButton.addEventListener("click", testAnswerFlow);