const randomNumber = function (size) {
    return Math.floor(Math.random() * size)
};

const width = 400;
const height = 500;
const treasure = {
    x: randomNumber(width),
    y: randomNumber(height),
};

let clickCouner = 0;

const distance = function(event, treasure) {
    let dx = event.offsetX - treasure.x; 
    let dy = event.offsetY - treasure.y; 
    return Math.sqrt((dx*dx)+(dy*dy));
};

const hint = function (distance) {
    if (distance < 30){
        return "Treasure!"
    } else if (distance < 50) {
        return "Hot"
    } else if (distance < 70) {
        return "Warmer"
    } else if (distance < 90) {
        return "Warm"
    } else if (distance < 150) {
        return "Cold"
    } else if (distance < 330) {
        return "Frozen"
    } else {
        return "Siberia!";
    }
};

const finishGame = function (hintText) {
    document.querySelector("#distance").textContent = hintText;
    document.querySelector("#map").remove();
}

const showConfetti = function() {
    const confettiElement = document.querySelector("#my-canvas");
    const confettiSettings = {target: confettiElement };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

document.querySelector("#map").onclick = function(event) {
    clickCouner++;
    console.log(clickCouner);
    const userDistance = distance(event,treasure);
    const hintText = hint(userDistance);
    document.querySelector("#distance").textContent = hintText;
    document.querySelector("#counter").textContent = clickCouner;
    
    if (hintText === "Treasure!") {
        finishGame(hintText);
        showConfetti();
    }
    if (clickCouner > 24) {
        finishGame("Game Over");
    }
};
