let signup = document.querySelector(".signup");
let login = document.querySelector(".signin");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

signin.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});