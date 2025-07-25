let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector(".reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-cont");
let msg1 = document.querySelector("#msg");

let turn0 = true;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 const resetGame = () => {
    turn0 = true;
    enablesboxes();
    msgcont.classList.add("hide");
    count = 0;
 }
let count = 0;
const countbox = ()=>{
    if(count===9){
    msg1.innerText = `Congratulations, Match was Draw no one win`;
    msgcont.classList.remove("hide");
    disabledboxes();
}
}

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            box.style.color = "#2A7B9B";
            turn0 = false;
            count++;
            if(count===9){
                countbox();
            }
        }else{
            box.innerText = "X";
            box.style.color = "#2180ED";
            turn0 = true;
            count++;
            if(count===9){
                countbox();
            }
        }
        box.disabled = true;
        checkwinner();
    })
 });

 const disabledboxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
 };

const enablesboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

 const showwinner = (winner) => {
    msg1.innerText = `Congratulations, Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disabledboxes();
 }
// const showwinner2 = () => {
//     msg1.innerText = `Congratulations, Draw`;
//     msgcont.classList.remove("hide");
//     disabledboxes();
//  }

 const checkwinner = ()=>{
    for(let pattern of winpatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // );
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2==pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
        }
    }
 }

 newbtn.addEventListener("click", resetGame);
 rstbtn.addEventListener("click", resetGame);
