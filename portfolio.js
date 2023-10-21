'use strict';

// TECHNOLOGY

// Clicknic

const windowTech1 = document.querySelector("#window-project-tech-1");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector("#close-modal-1");
const btnTech1 = document.querySelectorAll("#button-project-tech-1");

const openTech1 = function () {
    console.log("Button clicked");
    windowTech1.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech1 = function () {
    windowTech1.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech1.length; i++) {
    btnTech1[i].addEventListener("click", openTech1);
}

btnCloseModal1.addEventListener("click", closeTech1);
overlay.addEventListener("click", closeTech1);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech1.classList.contains("hidden")) {
        closeTech1();
    }
});

// Sobat Listrik

const windowTech2 = document.querySelector("#window-project-tech-2");
const btnCloseModal2 = document.querySelector("#close-modal-2");
const btnTech2 = document.querySelectorAll("#button-project-tech-2");

const openTech2 = function () {
    console.log("Button clicked");
    windowTech2.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech2 = function () {
    windowTech2.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech2.length; i++) {
    btnTech2[i].addEventListener("click", openTech2);
}

btnCloseModal2.addEventListener("click", closeTech2);
overlay.addEventListener("click", closeTech2);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech2.classList.contains("hidden")) {
        closeTech2();
    }
});

// RPA

const windowTech3 = document.querySelector("#window-project-tech-3");
const btnCloseModal3 = document.querySelector("#close-modal-3");
const btnTech3 = document.querySelectorAll("#button-project-tech-3");

const openTech3 = function () {
    console.log("Button clicked");
    windowTech3.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech3 = function () {
    windowTech3.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech2.length; i++) {
    btnTech3[i].addEventListener("click", openTech3);
}

btnCloseModal3.addEventListener("click", closeTech3);
overlay.addEventListener("click", closeTech3);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech3.classList.contains("hidden")) {
        closeTech3();
    }
});

// Community Service

const windowTech4 = document.querySelector("#window-project-tech-4");
const btnCloseModal4 = document.querySelector("#close-modal-4");
const btnTech4 = document.querySelectorAll("#button-project-tech-4");

const openTech4 = function () {
    console.log("Button clicked");
    windowTech4.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech4 = function () {
    windowTech4.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech4.length; i++) {
    btnTech4[i].addEventListener("click", openTech4);
}

btnCloseModal4.addEventListener("click", closeTech4);
overlay.addEventListener("click", closeTech4);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech4.classList.contains("hidden")) {
        closeTech2();
    }
});

// CREATIVITY

// Clicknic

const windowTech5 = document.querySelector("#window-project-tech-5");
const btnCloseModal5 = document.querySelector("#close-modal-5");
const btnTech5 = document.querySelectorAll("#button-project-tech-5");

const openTech5 = function () {
    console.log("Button clicked");
    windowTech5.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech5 = function () {
    windowTech5.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech5.length; i++) {
    btnTech5[i].addEventListener("click", openTech5);
}

btnCloseModal5.addEventListener("click", closeTech5);
overlay.addEventListener("click", closeTech5);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech5.classList.contains("hidden")) {
        closeTech5();
    }
});

// Sobat Listrik

const windowTech6 = document.querySelector("#window-project-tech-6");
const btnCloseModal6 = document.querySelector("#close-modal-6");
const btnTech6 = document.querySelectorAll("#button-project-tech-6");

const openTech6 = function () {
    console.log("Button clicked");
    windowTech6.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech6 = function () {
    windowTech6.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech6.length; i++) {
    btnTech6[i].addEventListener("click", openTech6);
}

btnCloseModal6.addEventListener("click", closeTech6);
overlay.addEventListener("click", closeTech6);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech6.classList.contains("hidden")) {
        closeTech6();
    }
});

// RPA

const windowTech7 = document.querySelector("#window-project-tech-7");
const btnCloseModal7 = document.querySelector("#close-modal-7");
const btnTech7 = document.querySelectorAll("#button-project-tech-7");

const openTech7 = function () {
    console.log("Button clicked");
    windowTech7.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech7 = function () {
    windowTech7.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech7.length; i++) {
    btnTech7[i].addEventListener("click", openTech7);
}

btnCloseModal7.addEventListener("click", closeTech7);
overlay.addEventListener("click", closeTech7);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech7.classList.contains("hidden")) {
        closeTech7();
    }
});

// Community Service

const windowTech8 = document.querySelector("#window-project-tech-8");
const btnCloseModal8 = document.querySelector("#close-modal-8");
const btnTech8 = document.querySelectorAll("#button-project-tech-8");

const openTech8 = function () {
    console.log("Button clicked");
    windowTech8.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech8 = function () {
    windowTech8.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech8.length; i++) {
    btnTech8[i].addEventListener("click", openTech8);
}

btnCloseModal8.addEventListener("click", closeTech8);
overlay.addEventListener("click", closeTech8);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowTech8.classList.contains("hidden")) {
        closeTech8();
    }
});

