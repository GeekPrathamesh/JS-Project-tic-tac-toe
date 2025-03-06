let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turn0=true;   //player x gives o

// let arr=["banana","apple","chiku"]; //1d array

// let arr2=[["banana","mango"],["chiku","potato"]]  //2d array


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
    })
}
checkwinner();
)

const checkwinner =()=>{
    
}