function decimal2Hex(n) {
    var hex = n.toString(16)
    return hex.length == 1 ? "0" + hex : hex
}

function randomRGB() {
    return "#" + Array.from({length: 3}, () => decimal2Hex(Math.floor(Math.random() * 256))).join("")
}

container = document.getElementById("container")
for (i = 0; i < 25; i++) {
    var block = document.createElement("div")
    rgb = randomRGB()
    var text = document.createElement("p")
    text.innerText = rgb
    block.style.backgroundColor = rgb
    block.className = "color-block"
    block.appendChild(text)
    container.appendChild(block)
}
