let chosenQuestion = document.querySelector(".chosen-question");
const questionSubmitButton = document.querySelector("#question-submit__button");

const questions = [
  "Name of your first crush?",
  "what's your dream job?",
  "What are your Greatest fears?",
  "Who is someone you would die for?",
  "Have you ever had Oral Sex?",
  "Who is someone you can tell anything to?",
  "Have you ever smoked?",
  "Have you ever drunk alcohol?",
  "Have you ever done drugs?",
  "When was the last time you cried?",
  "Who is ur best friend?",
  "What's your favorite colour?",
  "Are you an alcoholic?",
  "When is your birthday?",
  "Are you bisexual or straight?",
  "Do you prefer sex at night, in the morning, mid-afternoon?",
  "Are you an Introvert or extrovert?",
  "What's your favorite body part?",
  "What's the longest you've gone without sex?",
  "If you had 3 wishes, what would they be?",
  "Cuddling or Sex?",
  "If I asked politely, would you watch porn with me?",
  "What are some nicknames people call you?",
  "What is your favourite song?",
  "Condoms or raw?",
  "What's the worst thing that ever happened too you?",
  "What's the best thing that ever happened to you?",
  "What is something you would change about yourself?",
  "What is your full name?",
  "What is your worst mistake?",
  "What is something you're proud of?",
  "Are you a moaner or a screamer?",
  "Would watch a movie or read a book?",
  "Have you ever tried to kill yourself?",
  "What's favourite TV show?",
  "What are you wearing right now (give details)?",
  "Have you ever contracted a disease?",
  "Do you have any special talents?",
  "Do you ever wish you could start over?",
  "Have you ever been sexually abused?",
];

function getChosenQuestionNumber() {
  let chosenQuestionNumber = document.getElementById(
    "question-number__input"
  ).value;
  console.log(`you selected question ${chosenQuestionNumber}`);
  return chosenQuestionNumber;
}

function getQuestion(questionNumber) {
  let questionPosition = questionNumber - 1;
  let pickedQuestion = questions[questionPosition];
  return pickedQuestion;
}

function displayQuestion(userInput) {
  chosenQuestion.textContent = userInput;
}

function testQuestionFlow() {
  let userChoice = getChosenQuestionNumber();
  const choseQuestion = getQuestion(userChoice);
  displayQuestion(choseQuestion);
}

questionSubmitButton.addEventListener("click", testQuestionFlow);
