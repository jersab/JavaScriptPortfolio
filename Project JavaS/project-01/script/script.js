function reset(){
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    for (let i = 1; i <= 6; i++) {
if (i === dice1) {
    document.querySelector(".img1").setAttribute("src", `./images/dice${i}.png`);
    
}
}
    for (let y = 1; y <= 6; y++) {
if (y === dice2) {
    document.querySelector(".img2").setAttribute("src", `./images/dice${y}.png`);
}
}
let result = dice1 > dice2 ? "Player 1 WINS!" : dice1 < dice2 ? "Player 2 WINS!" : "It's a DRAW!";
        document.querySelector("h1").innerText = result;
  }