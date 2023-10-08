let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// FORM WINDOW

let formButton = document.querySelector("#feedback-button");
let formCloseButton = document.querySelector(".form-close-button");
let formWindow = document.querySelector('#form-window');

// const openForm = function () {
//     formWindow.classList.remove('hidden');
// };

// const closeForm = function () {
//     formWindow.classList.add('hidden');
// };

// for (let i = 0; i < formButton.length; i++) {
//     formButton[i].addEventListener("click", openForm);
// }

// formButton.addEventListener("click", openForm);
// formCloseButton.addEventListener("click", closeForm);

// document.querySelector("#menu-icon").addEventListener("click", function(){
//     document.querySelector(".form-window").classList.remove("hidden");
// });

document.querySelector(".form-button").addEventListener("click", function(){
    document.querySelector("#form-window").classList.remove("hidden");
});
document.querySelector(".form-button").addEventListener("click", function(){
    document.querySelector("#form-window").classList.remove("hidden");
});