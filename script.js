

const randomizeWord = () => {
  const wordList = [
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
    "båt",
  ];

  const randomizedWord = wordList[Math.floor(Math.random() * wordList.length)];
  return randomizedWord.toUpperCase().split("");
};

const playGame = document.querySelector("#play");
const charButtons = document.querySelectorAll(".letters");
let selectedWord = document.querySelector(".selected-word");
const lifeCount = document.querySelector("#life-count");
const lifeParagraph = document.getElementById("life");

playGame.addEventListener("click", () => {
  playGame.disabled = true;

  const word = randomizeWord();
  let answerArray = [];
  let life = 6;

  for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    selectedWord.innerHTML = answerArray.join("");
  };

  for (let i = 0; i < charButtons.length; i++) {
    charButtons[i].disabled = false;
    charButtons[i].addEventListener("click", () => {
      const guess = charButtons[i].innerHTML;
      if (word.includes(guess)) {
        
        //console.log(selectedWord.innerHTML.substring(0, word.indexOf(guess)));
        //selectedWord.innerHTML[word.indexOf(guess)] = guess;

          let updateGuess = selectedWord.innerHTML.substring(0, word.indexOf(guess)) + guess + selectedWord.innerHTML.substring(word.indexOf(guess) + 1);
          selectedWord.innerHTML = updateGuess;


      } else {
        lifeCount.innerHTML = --life;
        if (life <= 0) {
          lifeParagraph.innerHTML = "GAME OVER!";
          lifeParagraph.style.color = "red";
          lifeParagraph.style.fontSize = "x-large";
        }
      }

    })
  }




  console.log(word);
  console.log(answerArray);
}); // Slutet av playgame
