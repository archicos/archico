// 
let circularProgress = document.querySelector(".circular-progress .leadership"),
    progressValue = document.querySelector(".progress-value .leadership");

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

// 
let circularProgress2 = document.querySelector(".circular-progress .public-speaking"),
    progressValue2 = document.querySelector(".progress-value .public-speaking");

let progressStartValue2 = 0,
    progressEndValue2 = 90,
    speed2 = 15;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`
    circularProgress2.style.background = `conic-gradient(rgb(0, 90, 90) ${progressStartValue2 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue2 == progressEndValue2) {
        clearInterval(progress2);
    }
    console.log(progressStartValue2)
}, speed2)

