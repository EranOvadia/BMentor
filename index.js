
function changeColor() {
    const h1s = document.getElementsByTagName("h1");
    for (let index = 0; index < h1s.length; index++) {
        h1s[index].style.color = changeColorButton.className;
    }
}

function moveDog() {
    const dog = document.getElementById("dog");
    if (dog.className === 'right') {
        dog.className = 'left';
    } else {
        dog.className = 'right';
    }
}

function moveBall() {
    const ballImage = document.getElementById("ball-image");
    const ballShadow = document.getElementById("ball-shadow");

    if (ballImage.className === 'ball-div-right') {
        ballImage.className = 'ball-div-left';
        ballShadow.className = 'ball-span-left';
    } else {
        ballImage.className = 'ball-div-right';
        ballShadow.className = 'ball-span-right';
    }

}


const changeColorButton = document.getElementById("change-color");
changeColorButton.addEventListener("click", changeColor);

const moveDogButton = document.getElementById("move-dog");
moveDogButton.addEventListener("click", moveDog);


const moveBallButton = document.getElementById("move-ball");
moveBallButton.addEventListener("click", moveBall);
