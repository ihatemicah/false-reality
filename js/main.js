// Image Adder Script

const images = [
    "img/image-01.jpg",
    "img/image-02.jpg",
    "img/image-06.jpg",
    "img/image-08.jpg",
    "img/image-09.jpg",
    "img/image-12.jpg",
    "img/image-13.jpg",
    "img/image-14.jpg",
    "img/image-15.gif",
    "img/image-16.gif",
    "img/image-17.gif",
    "img/image-18.gif",
    "img/image-19.gif",
    "img/image-20.gif",
    "img/image-21.gif"
]

let i = 0 

function placeImage(x,y) {

    const nextImage = images[i]

    const img = document.createElement("img")

    img.setAttribute("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"
    img.style.transform = "translate(-50%, -50%) scale(0.5) rotate("+(Math.random() * 20 - 10) +"deg)"

    document.body.appendChild(img)

    i = i + 1


    if (i >= images.length) {
        i = 0
    }

}

document.addEventListener("click" , function (event) {
    event.preventDefault()
    placeImage(event.pageX,event.pageY)

})

document.addEventListener("touchend", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})