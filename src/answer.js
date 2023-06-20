// import hideQuestionSection from "./questions.js";

export default function testAnswerFlow() {
  displayUserAnswer();
  hideAnswerSection();
}

function getUserAnswer() {
  const userAnswer = document.getElementById("user-answer").value;
  return userAnswer;
}

function displayUserAnswer() {
  const answerToBeDisplayed = getUserAnswer();
  const answerDisplay = document.createElement("div");
  answerDisplay.id = "answer-display";
  answerDisplay.textContent = `Answer: ${answerToBeDisplayed}`;
  document.querySelector(".chosen-question").append(answerDisplay);
//   hideQuestionSection();
}

function hideAnswerSection() {
  const questionSection = document.querySelector(".answer-section");
  questionSection.classList.toggle("invisible");
}