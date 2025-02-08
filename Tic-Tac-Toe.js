// winning patern->012,345,678,036,147,258,048,246(total 8 winning pattern)
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msgcontainer");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");



let turnO = true;

const winPtterns = [//winning pattern in 2d array
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame =() =>{
    turnO = true;
    enableBoxes ();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box) => { //event listener
    box.addEventListener("click" , () => {
        //box.innerText="X";
        if(turnO){
            box.innerText ="O";//player first print O then second X
            turnO = false ;
        }else{
            box.innerText = "X";//player second print X then second O
            turnO = true;
        }
        box.disabled = true;//by this our button is disable after pressing one time
        checkWinner ();
    })
});
let enableBoxes = () =>{
    for (box of boxes){
        box.disabled = false; 
        box.innerText ="";
    }
}
const showWinner =(alok) =>{
    msg.innerText = `congratulations winner is ${alok}`;
    msgcontainer.classList.remove("hide");
    disableBoxes ();
}
const checkWinner = () =>{
    for(let alok of winPtterns){
         let pos1 = boxes[alok[0]].innerText
         let pos2 = boxes[alok[1]].innerText
         let pos3 = boxes[alok[2]].innerText
         if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                //console.log("winner",pos1)
                showWinner (pos1);
            }
        }
    }
}
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);



 
