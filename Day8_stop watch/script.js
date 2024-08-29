// script.js

let countdownInterval;

document.getElementById('start-button').addEventListener('click', startCountdown);

function startCountdown() {
    // Prevent multiple intervals
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    let timeInMinutes = 5; // Set countdown time here
    let endTime = Date.now() + timeInMinutes * 60 * 1000;

    countdownInterval = setInterval(() => {
        let remainingTime = endTime - Date.now();

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer-display').textContent = '00:00:00';
            alert('Time is up!');
            return;
        }

        let minutes = Math.floor((remainingTime / 1000) / 60);
        let seconds = Math.floor((remainingTime / 1000) % 60);

        document.getElementById('timer-display').textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
