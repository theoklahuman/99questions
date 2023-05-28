export default function testAnswerFlow() {
    displayUserAnswer();
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
    answerDisplay.textContent = answerToBeDisplayed;
    document.querySelector(".chosen-question").append(answerDisplay);
}
