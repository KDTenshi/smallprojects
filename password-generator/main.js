document.querySelector(".Generator_Form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const generateBtn = document.querySelector(".Generator_Form_Button");
const output = document.getElementById("output");

const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numbers = "0123456789".split("");
const symbols = "!@#$%&?*".split("");

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * (max - 1));
};

const generatePassword = (length, chars = []) => {
  if (chars.length === 0) return { isError: true, error: "Empty password" };
  if (length < 10) return { isError: true, error: "Min length is 10" };
  if (length > 50) return { isError: true, error: "Max length is 50" };
  if (isNaN(length)) return { isError: true, error: "Enter a correct length" };

  const passwordChars = [];

  while (passwordChars.length !== length) {
    const number = getRandomNumber(chars.length);

    passwordChars.push(chars[number]);
  }

  return passwordChars.join("");
};

const handleGeneratePassword = () => {
  const length = Number(document.getElementById("length").value);
  const useLowercase = document.getElementById("lowercase").checked;
  const useUppercase = document.getElementById("uppercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const chars = [];

  if (useLowercase) chars.push(...lowercase);
  if (useUppercase) chars.push(...uppercase);
  if (useNumbers) chars.push(...numbers);
  if (useSymbols) chars.push(...symbols);

  const password = generatePassword(length, chars);

  if (password.isError) {
    output.classList.remove("Generator_Output_Success");
    output.classList.add("Generator_Output_Error");
    output.innerText = password.error;
  } else {
    output.classList.remove("Generator_Output_Error");
    output.classList.add("Generator_Output_Success");
    output.innerText = password;
  }
};

generateBtn.addEventListener("click", handleGeneratePassword);
