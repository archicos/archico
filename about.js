let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 15;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(rgb(0, 90, 90) ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    console.log(progressStartValue)
}, speed)