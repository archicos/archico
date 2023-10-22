document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        const fill = bar.querySelector(".fill");
        const number = bar.querySelector(".number");

        fill.style.transform = `translate(-50%, -50%) rotate(${(percent / 100) * 360}deg)`;
        number.innerText = `${percent}%`;
    });
});
