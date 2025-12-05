// ------------------------------------
// FIRST 60-SECOND COUNTDOWN
// ------------------------------------
let seconds = 60;
const countdownEl = document.getElementById("countdown");

const firstTimer = setInterval(() => {
    seconds--;
    countdownEl.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(firstTimer);
        countdownEl.style.display = "none";
        document.getElementById("captchaSection").style.display = "block";
    }
}, 1000);


// ------------------------------------
// CAPTCHA THAT ALWAYS ACCEPTS ANYTHING
// ------------------------------------
function submitCaptcha() {
    document.getElementById("captchaSection").style.display = "none";
    document.getElementById("loadingSection").style.display = "block";

    startLoadingCountdown();
    startProgressBar();
}


// ------------------------------------
// SECOND 60-SECOND COUNTDOWN
// ------------------------------------
function startLoadingCountdown() {
    let loadSeconds = 60;
    const loadEl = document.getElementById("loadingCountdown");

    const loadTimer = setInterval(() => {
        loadSeconds--;
        loadEl.textContent = loadSeconds;

        if (loadSeconds <= 0) {
            clearInterval(loadTimer);
            document.getElementById("loadingSection").style.display = "none";
            document.getElementById("finalMessage").style.display = "block";
        }
    }, 1000);
}


// ------------------------------------
// FAKE PROGRESS BAR (fills in 60 sec)
// ------------------------------------
function startProgressBar() {
    const bar = document.getElementById("progressBar");
    let width = 0;

    const interval = setInterval(() => {
        width += (100 / 60); // fill over 60 seconds
        bar.style.width = width + "%";

        if (width >= 100) {
            clearInterval(interval);
        }
    }, 1000);
}
