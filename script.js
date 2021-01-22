// SLUMPAR ETT ORD I EN ARRAY OCH GÖR OM ORDET TILL EN CHARACTER ARRAY DÄR VARJE BOKSTAV I ORDET HAR ETT EGET INDEX
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

const playGame = document.querySelector("#play-btn");
const charButtons = document.querySelectorAll(".letters");
const lifeCount = document.querySelector("#life-count");
const lifeParagraph = document.getElementById("life");
lifeCount.style.display = "none";
lifeParagraph.style.display = "none";

function startGame() {
  playGame.addEventListener("click", () => {
    lifeCount.style.display = "block";
    lifeParagraph.style.display = "block";
    playGame.style.display = "none";
    let selectedWord = document.querySelector(".selected-word");
    let answerArray = [];
    let life = 6;
    const word = randomizeWord();

    // SKRIVER UT UNDERSTRECK SOM REPRESENTERAR VARJE BOKSTAV I DET SLUMPADE ORDET
    for (i = 0; i < word.length; i++) {
      answerArray[i] = "_";
      selectedWord.innerHTML = answerArray.join("");
    }

    // AKTIVERAR ALLA BOKSTAVSKNAPPAR
    for (let i = 0; i < charButtons.length; i++) {
      charButtons[i].disabled = false;

      // ALLT DETTA HÄNDER VARJE GÅNG MAN TRYCKER/GISSAR PÅ EN BOKSTAV
      charButtons[i].addEventListener("click", () => {
        const guess = charButtons[i].innerHTML;
        charButtons[i].disabled = true;

        // TAR REDA PÅ OM GUESS FINNS I DET SLUMPADE ORDET OCH SÄTTER IN RÄTT BOKSTAV PÅ RÄTT INDEX I ORDET
        if (word.includes(guess)) {
          let updateGuess =
            selectedWord.innerHTML.substring(0, word.indexOf(guess)) +
            guess +
            selectedWord.innerHTML.substring(word.indexOf(guess) + 1);
          // TAR REDA PÅ OM GUESS FINNS I WORD MER ÄN EN GÅNG
          let firstIndex = word.indexOf(guess);
          let secondIndex = word.indexOf(guess, firstIndex + 1);
          if (secondIndex > -1) {
            updateGuess =
              updateGuess.substring(0, word.indexOf(guess, firstIndex + 1)) +
              guess +
              selectedWord.innerHTML.substring(
                word.indexOf(guess, firstIndex + 1) + 1
              );
          }

          selectedWord.innerHTML = updateGuess;

          // KOLLAR OM MAN HAR LYCKATS GISSAT RÄTT ELLER FEL
          // OCH IMPLEMENTERAR ALL STYLING OCH LOGIK SOM BEHÖVS FÖR VARJE FALL.
          if (selectedWord.innerHTML === word.join("")) {
            lifeParagraph.innerHTML = "YOU WIN!";
            lifeParagraph.style.color = "green";
            lifeParagraph.style.fontSize = "x-large";
            for (let i = 0; i < charButtons.length; i++) {
              charButtons[i].disabled = true;
            }
          }
          charButtons.disabled = true;
        } else {
          lifeCount.innerHTML = --life;
          if (life <= 0) {
            lifeParagraph.innerHTML = "GAME OVER!";
            lifeParagraph.style.color = "red";
            lifeParagraph.style.fontSize = "x-large";
            for (let i = 0; i < charButtons.length; i++) {
              charButtons[i].disabled = true;
            }
          }
        }
      });
    }
  });
}

startGame();
