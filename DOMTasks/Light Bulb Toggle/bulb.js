let imgElement = document.getElementById("img-src");

function turnOn() {
    if (imgElement.src.includes("turnoff.jpg")) {
        imgElement.src = "./images/turnon.jpg";
    }
}

function turnOff() {
    if (imgElement.src.includes("turnon.jpg")) {
        imgElement.src = "./images/turnoff.jpg";
    }
}