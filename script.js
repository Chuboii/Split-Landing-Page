// let  containers = document.querySelectorAll(".container")

// containers.forEach(el => {
//     el.addEventListener("click", () => {
//         removeActive()
//         el.classList.add("active")
//     })
// })

// function removeActive(params) {
//     containers.forEach(el => {
//         el.classList.remove("active")
//     })
// }
let main = document.querySelector(".main")
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let containers = document.querySelectorAll(".container")

left.addEventListener("mouseenter", () => {
    main.classList.add("hover-left")
})

left.addEventListener("mouseleave", () => {
    main.classList.remove("hover-left")
})

right.addEventListener("mouseenter", () => {
    main.classList.add("hover-right")
})

right.addEventListener("mouseleave", () => {
    main.classList.remove("hover-right")
})