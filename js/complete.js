const arrowImg = document.querySelector(".arrow-btn");

arrowImg.addEventListener("click", () => {
    arrowImg.parentElement.classList.toggle("open");
    console.log("clicked"); 
});