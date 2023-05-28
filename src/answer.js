// import hideQuestionSection from "./questions.js";

export default function testAnswerFlow() {
  displayUserAnswer();
//   addCopyButton();
  hideAnswerSection();
}

function getUserAnswer() {
  const userAnswer = document.getElementById("user-answer").value;
  console.log(userAnswer);
  return userAnswer;
}

// function showAnswerOnPage() {
//     getUserAnswer()
//     const answerDisplay = document.createElement("div");
//     answerDisplay.textContent
// }

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

// function addCopyButton() {
//   const copyButton = document.createElement("button");
//   copyButton.id = "copy-button";
//   copyButton.textContent = "Copy Text";
//   const infoDisplay = document.querySelector(".chosen-question");
//   infoDisplay.insertAdjacentElement("beforeend", copyButton);
//   copyButton.onclick = removeCopyButton;
//   console.log(infoDisplay);
// }

// function copyText() {
//     const infoDisplayContent = document.querySelector(".chosen-question").textContent;
//     infoDisplayContent.select();
//     infoDisplayContent.setSectionRange(0, 99999);
//     navigator.clipboard.writeText(infoDisplayContent);
//     alert("We just copied: " + infoDisplayContent);
// }

// function removeCopyButton() {
//     copyText();
//     const copyButton = document.querySelector("#copy-button");
//     const infoDisplay = document.querySelector(".chosen-question");
//     console.log(copyButton.textContent);
//     copyButton.remove();
//     console.log(infoDisplay.textContent.trim());
// }
