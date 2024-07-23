const words = [
  "aspect",
  "advertising",
  "revolution",
  "republic",
  "reality",
  "science",
  "garbage",
  "development",
  "student",
  "cell",
  "collection",
  "reception",
  "strategy",
  "mom",
  "wedding",
  "story",
  "analysis",
  "response",
  "drama",
  "presence",
  "football",
  "independence",
  "responsibility",
  "child",
  "control",
  "context",
  "insect",
  "literature",
  "love",
  "power",
  "tennis",
  "dad",
  "politics",
  "addition",
  "department",
  "signature",
  "trainer",
  "advice",
  "finding",
  "policy",
  "year",
  "oven",
  "grandmother",
  "ambition",
  "expression",
  "vehicle",
  "meat",
  "organization",
  "government",
  "mixture",
];

const guessForm = document.getElementById("guess");
const result = document.getElementById("result");
const used = document.getElementById("used");
const guessesLeft = document.getElementById("left");
const retryBtn = document.getElementById("retry");
const wordContainer = document.getElementById("word");
const letterInput = document.getElementById("input");

const word = getRandomWord();
const usedLetters = [];
const hiddenWord = word.map((i) => "*");
wordContainer.innerText = hiddenWord.join("");

let guesses = word.length * 2;
guessesLeft.innerText = guesses;

guessForm.addEventListener("submit", handleGuess);
letterInput.addEventListener("input", handleInput);
retryBtn.addEventListener("click", handleRetry);

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max - 1));
}

function getRandomWord() {
  const number = getRandomNumber(words.length);
  const word = words[number].split("");
  return word;
}

function getLetterPositions(letter) {
  const positions = [];

  word.forEach((wLetter, index) => {
    if (wLetter === letter) positions.push(index);
  });

  return positions;
}

function updateHiddenWord(positions, letter) {
  positions.forEach((position) => {
    hiddenWord[position] = letter;
  });

  wordContainer.innerText = hiddenWord.join("");
}

function checkLetter(letter) {
  if (!hiddenWord.includes("*")) return "You already guessed the word, try again to guess a new one";
  if (guesses === 0) return "No more guesses left, try again";

  if (usedLetters.includes(letter)) return `You already checked letter ${letter}`;

  guesses -= 1;
  guessesLeft.innerText = guesses;

  if (guesses === 0) {
    wordContainer.innerText = word.join("");
    return "You haven't guessed the word, try again to guess a new one";
  }

  usedLetters.push(letter);
  used.innerText = usedLetters.join(" ");

  const positions = getLetterPositions(letter);

  if (positions.length === 0) return `Wrong! The word doesn't have letter ${letter}`;

  updateHiddenWord(positions, letter);

  if (!hiddenWord.includes("*")) return "Congrats! You guessed the word, try again to guess a new one!";

  return `Correct! The word does have letter ${letter}`;
}

function handleRetry() {
  location.reload(true);
}

function handleInput(e) {
  const target = e.target;
  const regex = new RegExp("[A-Za-z]");

  if (!regex.test(target.value)) {
    target.value = "";
  }
}

function handleGuess(e) {
  e.preventDefault();

  const letter = letterInput.value.toLowerCase();
  letterInput.value = "";

  const checkResult = checkLetter(letter);

  result.innerText = checkResult;
}
