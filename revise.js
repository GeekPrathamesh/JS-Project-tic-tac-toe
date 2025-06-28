const box = Array.from(document.getElementsByClassName("box"));
let winnerAnnounce = document.querySelector(".hide")
let winnerAnnouncepara = document.querySelector("#msg")
let newtrySala = document.querySelector(".newtry")
let resetBtn = document.querySelector("#reset-btn")
let turnX = true;
let winPatterns = ["012", "345", "678", "036", "147", "258", "048", "246"];
let val1, val2, val3;
box.forEach((eachBox) => {
  eachBox.addEventListener("click", () => {
    if (turnX) {
      eachBox.innerText = "X";
      turnX = false;
    } else {
      eachBox.innerText = "O";
      turnX = true;
    }
    eachBox.disabled = true;
    winnerCheck();
  });
});

const winnerCheck = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern)
    val1 = box[pattern[0]].innerText;
    val2 = box[pattern[1]].innerText;
    val3 = box[pattern[2]].innerText;
    if (val1 !== "" && val2 !== "" && val3 !== "") {
      if (val1 === val2 && val2 === val3) {
        console.log(val1, "is winner");
        showWinner(val1);
        disableboxes(val1);
      }
    }
  }
};
const showWinner =(winner)=>{
winnerAnnounce.classList.remove("hide");
newtrySala.classList.remove("newtry");
winnerAnnouncepara.innerText = `winner is ${winner}`
}


resetBtn.addEventListener("click",()=>{
    turnX = true;
    winnerAnnounce.classList.add("hide");
newtrySala.classList.add("newtry");
box.forEach((box)=>{
    box.disabled=false;
    box.innerHTML="";
    box.style.backgroundColor="aliceblue";
})
})

const disableboxes =()=>{
 box.forEach((box)=>{
    box.disabled=true;
    if(box.innerText===val1){
        box.style.backgroundColor="lightgreen";
    }
})   
}