const humburger = document.querySelector(".humburger");
const navGater = document.querySelector("nav");
const closeHumburger = document.querySelector(".close-humburger");

humburger.addEventListener("click", () =>{
    navGater.classList.add("active")
})

closeHumburger.addEventListener("click", () =>{
    navGater.classList.remove("active")
})