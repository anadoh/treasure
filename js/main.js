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
    if (distance < 10){
        return "Burns!"
    } else if (distance < 20) {
        return "Hot"
    } else if (distance < 40) {
        return "Warmer"
    } else if (distance < 70) {
        return "Warm"
    } else if (distance < 150) {
        return "Cold"
    } else if (distance < 330) {
        return "Frozen"
    } else {
        return "Siberia!";
    }
};


document.querySelector("#map").onclick = function(event) {
    clickCouner++;
    console.log(clickCouner)
    const userDistance = distance(event,treasure);
    const hintText = hint(userDistance);
    document.querySelector("#distance").textContent = hintText;
    
    if (userDistance < 8) {
        alert(`Treasure was find after ${clickCouner} trials!`)
    }

};
