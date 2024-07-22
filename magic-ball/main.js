const answers = [
  "It is certain",
  "It is decidely so",
  "Without a doubt",
  "Yes - definitely",
  "You may rely on it",
  "As i see it, yes",
  "Most likely",
  "Outlook good",
  "Signs point to yes",
  "Yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not to tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

const ball = document.querySelector(".Ball");
const answer = document.querySelector(".Answer");

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max - 1));
};

const getAnswer = () => {
  const number = getRandomNumber(answers.length);

  return answers[number];
};

const handleShake = () => {
  ball.classList.add("Ball_Shaking");
  const random = getAnswer();

  setTimeout(() => {
    ball.classList.remove("Ball_Shaking");
    answer.innerText = random;
  }, 1000);
};

ball.addEventListener("click", handleShake);
