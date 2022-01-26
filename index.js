


let button = document.getElementById('button');

button.onclick = () => {
    let image = document.getElementById('image');
    if (image.getAttribute('src') == "images/bulb_off.png") {
        image.src = "images/bulb_on.png";
        button.innerHTML = "Turn off light";
    }
    else {
        image.src = "images/bulb_off.png";
        button.innerHTML = "Turn on light";
    }
}