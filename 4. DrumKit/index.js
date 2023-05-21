// adding event listners to the key presses
document.addEventListener("keypress",function(event){
    playSound(event.key);
    addAnimation(event.key);
});
// adding event listners to the buttons 
for(let i = 0 ;i<document.querySelectorAll('.btn').length ; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click" , function(){
        let key = this.innerHTML;
        playSound(key);
        addAnimation(key);
    });
}

// function to play the sound
function playSound(key){
    let audio ;
    if(key ==='w'){
        audio = new Audio("./sounds/tom-1.mp3");
    } else if(key ==='a'){
        audio = new Audio("./sounds/tom-2.mp3");
    } else if(key ==='s'){
        audio = new Audio("./sounds/tom-3.mp3");
    } else if(key ==='d'){
        audio = new Audio("./sounds/tom-4.mp3");
    } else if(key ==='j'){
        audio = new Audio("./sounds/snare.mp3");
    } else if(key ==='k'){
        audio = new Audio("./sounds/crash.mp3");
    } else if(key ==='l'){
        audio = new Audio("./sounds/kick-bass.mp3");
    } else{
        return ;
    }
    audio.play();
}

// function to add animation to the key that is pressed 
function addAnimation(key){
    document.querySelector(`#${key}`).classList.add("pressed");
    setTimeout(()=> document.querySelector(`#${key}`).classList.remove("pressed") , 100);
}