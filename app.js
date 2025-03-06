let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turnx = true; //player x and player y

// let arr=["banana","apple","chiku"]; //1d array

// let arr2=[["banana","mango"],["chiku","potato"]]  //2d array

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

// 2d arrays

for (let key of boxes) {
  key.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnx) {
      key.innerText = "x";
      turnx = false;
    } else {
      key.innerText = "o";
      turnx = true;
    }
  });
}

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("clicked")
//     })
// })
