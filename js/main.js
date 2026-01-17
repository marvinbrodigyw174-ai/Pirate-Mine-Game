let progress = 0;

const progressBar = document.getElementById("loading-progress");
const percentText = document.getElementById("loading-percent");

const loadingScreen = document.getElementById("loading-screen");
const mainScreen = document.getElementById("main-screen");

// Telegram WebApp ready
if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.ready();
}

const loadingInterval = setInterval(() => {
  progress += Math.floor(Math.random() * 8) + 4;

  if (progress >= 100) {
    progress = 100;
    clearInterval(loadingInterval);

    // Pequeña pausa para que se sienta natural
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      mainScreen.classList.remove("hidden");
    }, 400);
  }

  progressBar.style.width = progress + "%";
  percentText.textContent = progress + "%";
}, 300);
