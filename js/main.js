var countdown = document.querySelector(".countdown");

// Set Launch Date
const launchDate = new Date("May 1, 2021 13:00:00").getTime();

// Update Every Second
const intvl = setInterval(() => {
  // Get Todays Date And Time (ms)
  const now = new Date().getTime();

  // Time Form now till Launch Date
  const diff = launchDate - now;

  // Time Calculations
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  // Display Results
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>
    `;

  // If Launch Date Passed
  if (diff < 0) {
    // Stop Countdown
    clearInterval(intvl);
    // Style And Output Text
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
