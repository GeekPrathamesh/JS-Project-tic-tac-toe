let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let hide = document.querySelector(".hide");
let hide1 = document.querySelector(".newtry");
let msg = document.querySelector("#msg");



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
    key.disabled=true;
    
    winnerCheck();

  });
}

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("clicked")
//     })
// })

const winnerCheck = ()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        position1val=boxes[pattern[0]].innerText;
        position2val=boxes[pattern[1]].innerText;
        position3val=boxes[pattern[2]].innerText;

        if(position1val!="" && position2val!="" && position3val!="" ){
            if(position1val===position2val && position2val===position3val){
                console.log("winner is player :",position1val );
                showwinner(position1val);
                disableboxes();
            }
        }
        

    }
}

const showwinner =(winner)=>{
    msg.innerText=`Winner is ${position1val}`;
    hide.classList.remove("hide");
    hide1.classList.remove("newtry");
}

const resetgamebtn = () =>{
enableboxes();
turnx = true;
hide.classList.add("hide");
hide1.classList.add("newtry");
}

const enableboxes=()=>{
    hide.classList.add("hide");
    hide1.classList.add("newtry");
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
        
    }
}
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
newgamebtn.addEventListener("click",resetgamebtn);
resetBtn.addEventListener("click",enableboxes);