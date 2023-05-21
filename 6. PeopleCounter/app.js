let incBtn = document.querySelector(".btn-1");
let saveBtn = document.querySelector(".btn-2");
incBtn.addEventListener("click", function () {
    let c = document.querySelector(".count");
    let countSoFar = c.innerText;
    countSoFar++;
    c.innerText = countSoFar;
});
let check = 1;
saveBtn.addEventListener("click", function () {
    if (check == 1) {
        let mainBody = document.querySelector('.inner-body');
        let node = document.createElement('h2');
        node.className = "saved-count";
        node.innerText = "Previous entries : ";
        mainBody.appendChild(node);
        check = 0;
    }
    console.log("okok");
    let c = document.querySelector(".count");
    let countSoFar = c.innerText;
    let node = document.querySelector(".saved-count");
    let savedSoFar = node.innerText;
    node.innerText = savedSoFar + " - " + countSoFar;
    countSoFar = 0;
    c.innerText = countSoFar;
});