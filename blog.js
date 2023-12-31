'use strict';

'use strict';

// TECHNOLOGY

// Clicknic

const windowBlog1 = document.querySelector("#window-blog-1");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector("#close-modal-1");
const btnTech1 = document.querySelectorAll("#show-modal-1");

const openTech1 = function () {
    console.log("Button clicked");
    windowBlog1.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech1 = function () {
    windowBlog1.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech1.length; i++) {
    btnTech1[i].addEventListener("click", openTech1);
}

btnCloseModal1.addEventListener("click", closeTech1);
overlay.addEventListener("click", closeTech1);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog1.classList.contains("hidden")) {
        closeTech1();
    }
});

// Sobat Listrik

const windowBlog2 = document.querySelector("#window-blog-2");
const btnCloseModal2 = document.querySelector("#close-modal-2");
const btnTech2 = document.querySelectorAll("#show-modal-2");

const openTech2 = function () {
    console.log("Button clicked");
    windowBlog2.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech2 = function () {
    windowBlog2.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech2.length; i++) {
    btnTech2[i].addEventListener("click", openTech2);
}

btnCloseModal2.addEventListener("click", closeTech2);
overlay.addEventListener("click", closeTech2);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog2.classList.contains("hidden")) {
        closeTech2();
    }
});

// RPA

const windowBlog3 = document.querySelector("#window-blog-3");
const btnCloseModal3 = document.querySelector("#close-modal-3");
const btnTech3 = document.querySelectorAll("#show-modal-3");

const openTech3 = function () {
    console.log("Button clicked");
    windowBlog3.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech3 = function () {
    windowBlog3.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech2.length; i++) {
    btnTech3[i].addEventListener("click", openTech3);
}

btnCloseModal3.addEventListener("click", closeTech3);
overlay.addEventListener("click", closeTech3);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog3.classList.contains("hidden")) {
        closeTech3();
    }
});

// Community Service

const windowBlog4 = document.querySelector("#window-blog-4");
const btnCloseModal4 = document.querySelector("#close-modal-4");
const btnTech4 = document.querySelectorAll("#show-modal-4");

const openTech4 = function () {
    console.log("Button clicked");
    windowBlog4.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech4 = function () {
    windowBlog4.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech4.length; i++) {
    btnTech4[i].addEventListener("click", openTech4);
}

btnCloseModal4.addEventListener("click", closeTech4);
overlay.addEventListener("click", closeTech4);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog4.classList.contains("hidden")) {
        closeTech2();
    }
});

// CREATIVITY

// Clicknic

const windowBlog5 = document.querySelector("#window-blog-5");
const btnCloseModal5 = document.querySelector("#close-modal-5");
const btnTech5 = document.querySelectorAll("#show-modal-5");

const openTech5 = function () {
    console.log("Button clicked");
    windowBlog5.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech5 = function () {
    windowBlog5.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech5.length; i++) {
    btnTech5[i].addEventListener("click", openTech5);
}

btnCloseModal5.addEventListener("click", closeTech5);
overlay.addEventListener("click", closeTech5);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog5.classList.contains("hidden")) {
        closeTech5();
    }
});

// Sobat Listrik

const windowBlog6 = document.querySelector("#window-blog-6");
const btnCloseModal6 = document.querySelector("#close-modal-6");
const btnTech6 = document.querySelectorAll("#show-modal-6");

const openTech6 = function () {
    console.log("Button clicked");
    windowBlog6.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech6 = function () {
    windowBlog6.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech6.length; i++) {
    btnTech6[i].addEventListener("click", openTech6);
}

btnCloseModal6.addEventListener("click", closeTech6);
overlay.addEventListener("click", closeTech6);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog6.classList.contains("hidden")) {
        closeTech6();
    }
});

// RPA

const windowBlog7 = document.querySelector("#window-blog-7");
const btnCloseModal7 = document.querySelector("#close-modal-7");
const btnTech7 = document.querySelectorAll("#show-modal-7");

const openTech7 = function () {
    console.log("Button clicked");
    windowBlog7.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech7 = function () {
    windowBlog7.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech7.length; i++) {
    btnTech7[i].addEventListener("click", openTech7);
}

btnCloseModal7.addEventListener("click", closeTech7);
overlay.addEventListener("click", closeTech7);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog7.classList.contains("hidden")) {
        closeTech7();
    }
});

// Community Service

const windowBlog8 = document.querySelector("#window-blog-8");
const btnCloseModal8 = document.querySelector("#close-modal-8");
const btnTech8 = document.querySelectorAll("#show-modal-8");

const openTech8 = function () {
    console.log("Button clicked");
    windowBlog8.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeTech8 = function () {
    windowBlog8.classList.add("hidden");
    overlay.classList.add("hidden");
};

for (let i = 0; i < btnTech8.length; i++) {
    btnTech8[i].addEventListener("click", openTech8);
}

btnCloseModal8.addEventListener("click", closeTech8);
overlay.addEventListener("click", closeTech8);

document.addEventListener("keydown", function (e) {
    console.log(e.key);

    if (e.key === "Escape" && !windowBlog8.classList.contains("hidden")) {
        closeTech8();
    }
});

