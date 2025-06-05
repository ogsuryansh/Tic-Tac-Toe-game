let boxes = document.querySelectorAll(".box");
let btnNewGame = document.querySelector(".btnnewgame");
let btnResetGame = document.querySelector(".btnresetgame");
let msgContainer = document.querySelector(".msg-container");
let msg2 = document.querySelector(".msg-2")

let turnO = true;//playerX,playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //playerO
            box.innerText = "0";
            box.style.color = "red"; 
            box.style.z
            turnO = false;
        } else {  //playerX
            box.innerText = "X";
            turnO = true;
            box.style.color = "green"; 
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg2.innerHTML = `Winner is ${winner}`
    msg2.style.color = "yellow"
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "", pos2val != "", pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};

const resetgame = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const newgame = () => {
    msgContainer.classList.add("hide");
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


btnResetGame.addEventListener("click", resetgame);
btnNewGame.addEventListener("click", newgame);