document.addEventListener("DOMContentLoaded", () => {
    // Get references to all progress circles and numbers
    const progressBars = document.querySelectorAll('.progress');
    const numbers = document.querySelectorAll('.number');

    // Initialize counters for each progress bar
    const counters = [0, 0, 0, 0, 0, 0, 0];
    const targetPercentages = [65, 80, 50, 90, 75, 60, 70];

    // Function to update the progress and number display for each bar
    const updateProgress = (index) => {
        if (counters[index] <= targetPercentages[index]) {
            numbers[index].innerHTML = `${counters[index]}%`;
            const offset = 450 - (450 * counters[index]) / 100;
            progressBars[index].style.strokeDashoffset = offset;
            counters[index]++;
        }
    };

    // Update the progress for each bar every 30 milliseconds
    const progressAnimations = [];

    for (let i = 0; i < progressBars.length; i++) {
        progressAnimations[i] = setInterval(() => {
            updateProgress(i);
        }, 30);
    }
});
