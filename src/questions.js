let chosenQuestion = document.querySelector(".chosen-question");

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
  "Are you straight or gay?",
  "Do you prefer sex at night, in the morning, mid-afternoon?",
  "Are you an Introvert or extrovert?",
  "What's your favorite body part?",
  "What's the longest you've gone without sex?",
  "If you had 3 wishes, what would they be?",
  "Cuddling or Sex?",
  "If I asked politely, would you watch porn with me?",
  "What are some nicknames people call you?",
  "What is your favorite song?",
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
  "What's favorite TV show?",
  "What are you wearing right now (give details)?",
  "Have you ever contracted a disease?",
  "Do you have any special talents?",
  "Do you ever wish you could start over?",
  "Have you ever been sexually abused?",
  "Does naughty talk get you aroused?",
  "Have you ever had a near death experience?",
  "If you had a pet, What would it be?",
  "Are you Virgin?",
  "Do you have any tattoos?",
  "Are u single or in a relationship?",
  "Have you ever kissed someone of the same sex?",
  "What’s the most embarrassing thing that’s happened to you?",
  "When was the last time you had sex?",
  "What's your middle name?",
  "When was your last kiss?",
  "Who's your female bestfriend?",
  "Who's your male bestfriend?",
  "What is your favorite song?",
  "Have you ever cheated on someone?",
  "If you could have sex with any celebrity, who would it be?",
  "Who was your first kiss?",
  "Do/did you play any sports?",
  "What's something about you that you've never told a relative?",
  "What's a bad habit that you have?",
  "How long was your longest relationship?",
  "Have you ever had sex with someone who's juat a friend?",
  "What attracts you to a guy?",
  "What attracts you to a girl?",
  "What's your favorite number?",
  "Where do you live?",
  "Who do you love the most in your life?",
  "What are your Hobbies?",
  "What is one thing you can't live without?",
  "Who did you have your first sex with?",
  "Are you dominant or submissive in bed?",
  "Have you ever sent nudes?",
  "Do you watch porn?",
  "Have you ever made out with a friend?",
  "Do you like being explored?",
  "Would you let me kiss you?",
  "Do you wanna date me?",
  "What is your bra sizeyour bra size?",
  "What is your wildest sexual fantasy?",
  "Will you let me touch you?",
  "Will you hug me?",
  "What is your favorite sex position",
  "Has a guy have kissed u in public",
  "Has a stranger ever seen ur boobs by mistake?",
  "What turns you on?",
  "Have you ever had sex on a first date?",
  "What's your favorite food",
  "Will you kiss me?",
  "Where is ur favorite spot to be kissed?",
  "Have u ever masturbated?",
];

function getChosenQuestionNumber() {
  let chosenQuestionNumber = document.getElementById(
    "question-number__input"
  ).value;
  console.log(`you selected question ${chosenQuestionNumber}`);
  return chosenQuestionNumber;
}

function getQuestionFromQuestionList(questionNumber) {
  let questionPosition = questionNumber - 1;
  const invalidNumber = `If you're having girl problems I feel bad for you son I got ninety-nine questions but ${questionNumber} ain't one`;
  if (questionNumber <= 90) {
    let selectedQuestion = `Question ${questionNumber}:  ${questions[questionPosition]}`;
    return selectedQuestion;
  } else {
    return invalidNumber;
  }
}

function resetQuestionInputValue() {
  let chosenQuestionNumber = document.getElementById(
    "question-number__input"
  ).value;
  chosenQuestionNumber = "";
}

function displaySelectedQuestion(userInput) {
  chosenQuestion.textContent = userInput;
}

export default function testQuestionFlow() {
  let userChoice = getChosenQuestionNumber();
  const choseQuestion = getQuestionFromQuestionList(userChoice);
  displaySelectedQuestion(choseQuestion);
  resetQuestionInputValue()
}
