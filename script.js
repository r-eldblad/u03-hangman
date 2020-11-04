const selectWord = () => {
  const words = [
    "hospital",
    "operation",
    "ambulance",
    "industry",
    "apple",
    "bed",
    "light",
    "market",
    "mother",
    "father",
    "yxa",
  ];

  const selectedWord = words[Math.floor(Math.random() * words.length)];
  const characterArray = selectedWord.split("");
  console.log(selectedWord);
  return characterArray;
};

const displayLines = (characterArray) => {
  for (i = 0; i < characterArray.length; i++) {
    const line = document.createElement("P");
    line.innerHTML = "__";
    document.querySelector("#hangman").appendChild(line);
  }
};

const playGame = document.querySelector("#play");
playGame.addEventListener("click", () => {
  displayLines(selectWord());
});
