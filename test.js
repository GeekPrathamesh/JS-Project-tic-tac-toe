let boxes = document.querySelectorAll(".box");
let hiden = document.querySelector(".hide");
let message = document.querySelector("#msg");
let hide2 = document.querySelector(".newtry");
let newGame = document.querySelector("#reset-btn");


// Draw condition

// Score counter

// AI opponent (auto move for "O")

// Sound effects or animations


let player = true;
for (let box of boxes) {
  box.addEventListener("click", () => {
    console.log("box is clicked");
    if (player) {
      box.innerText = "x";
      player = false;
      box.style.background = "lightgreen";
    } else {
      box.innerText = "0";
      box.style.background = "yellow";
      player = true;
    }
    box.disabled = true;

    winnerCheck();
  });
}

const winnerCheck = () => {
  for (let pattern of winPatterns) {
    let val1 = boxes[pattern[0]].innerText;

    let val2 = boxes[pattern[1]].innerText;

    let val3 = boxes[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner is ", val1);
        disableboxes(pattern);
        showwinner(val1);
      }
    }
  }
};

const disableboxes = (pattern) => {
  for (let box of boxes) {
    box.disabled = true;
    boxes[pattern[0]].style.background = "green";
    boxes[pattern[1]].style.background = "green";
    boxes[pattern[2]].style.background = "green";
  }
};
const showwinner = (val1) => {
  hiden.classList.remove("hide");
  hide2.classList.remove("newtry");
  msg.innerText = `Winner is ${val1}`;
};

const resetgamebtn = () => {
  enableboxes();
  turnx = true;
  hide.classList.add("hide");
  hide1.classList.add("newtry");
  
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.background = "";
  }
};

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

newGame.addEventListener("click",()=>{
    resetgamebtn();
});
