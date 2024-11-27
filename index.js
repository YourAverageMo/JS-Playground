
const moveAmount = 100

let x = 0
let y = 0

const myBox = document.getElementById(`myBox`)

document.addEventListener("keydown", event => {
    if (event.key.startsWith(`Arrow`)) {
        switch (event.key) {
            case "ArrowUp":
                myBox.textContent = "☝🏽"
                myBox.style.backgroundColor = `tomato`
                y -= moveAmount
                break;
            case "ArrowDown":
                myBox.textContent = "👇🏽"
                myBox.style.backgroundColor = `tomato`
                y += moveAmount
                break;
            case "ArrowLeft":
                myBox.textContent = "👈🏽"
                myBox.style.backgroundColor = `tomato`
                x -= moveAmount
                break;
            case "ArrowRight":
                myBox.textContent = "👉🏽"
                myBox.style.backgroundColor = `tomato`
                x += moveAmount
                break;
        }

        myBox.style.top = `${y}px`
        myBox.style.left = `${x}px`
    }
})
document.addEventListener("keyup", event => {
    myBox.textContent = "😜"
    myBox.style.backgroundColor = `lightblue`
})    
