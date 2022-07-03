score = 0;
var cross = true;

music = new Audio("music.mp3");
musicGameOver = new Audio("gameover.mp3");
setTimeout(() => {
    music.play().muted
   // muted="muted"
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dinos = document.querySelector('.dino');
        dinos.classList.add('animatedino');
        console.log("inside function");
        setTimeout(() => {
            dinos.classList.remove('animatedino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 50 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 50) + "px";
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.dragon');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 93 && offsetY < 60) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('animateDragon')
        musicGameOver.play();
        setTimeout(() => {
            musicGameOver.pause();
            music.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        
     }
},10);



    function updateScore(score) {
        score.innerHTML = "Your Score: " + score;
    } 