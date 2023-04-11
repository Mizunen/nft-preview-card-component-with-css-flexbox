let overlay = document.querySelector('.overlay');
let mainImg = document.querySelector('.image-container');

function toggleHide(){
    overlay.classList.toggle("hide");
}

mainImg.addEventListener("mouseenter", toggleHide);

mainImg.addEventListener("mouseleave", toggleHide);