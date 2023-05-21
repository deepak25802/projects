let arr = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
document.querySelector("#buttonn").addEventListener("click", function () {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    let winnerText = "";
    if (randomNumber1 > randomNumber2) {
        winnerText = "Player 1 won!!";
    } else if (randomNumber1 < randomNumber2) {
        winnerText = "Player 2 won!!";
    } else {
        winnerText = "Its a draw!!";
    }
    document.querySelector("#img1").setAttribute("src", `./images/${arr[randomNumber1]}`)
    document.querySelector("#img2").setAttribute("src", `./images/${arr[randomNumber2]}`)
    document.querySelector(".winner").innerHTML = winnerText;
}); 