const menu = document.getElementById("menuIcon")
const mask = document.getElementById("mask")
const maskTwo = document.getElementById("mask-two")
const closeIcon = document.getElementById("close-icon")


menu.addEventListener("click", ()=> {
    //alert("eyeheh")
    mask.style.display = "block"
    maskTwo.style.display = "block"
})

closeIcon.addEventListener("click", ()=> {
    mask.style.display = "none"
    maskTwo.style.display = "none"
})

maskTwo.addEventListener("click", ()=> {
    mask.style.display = "none"
    maskTwo.style.display = "none"
})