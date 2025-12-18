/* Typing Effect */
const text = "To my Danu (bebe)… even miles apart, you are my heart 🤍";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}
typeEffect();

/* Gift Open */
function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.getElementById("surprise").classList.remove("hidden");
  startFireworks();
}

/* Countdown to April 2 */
const meetDate = new Date("April 2, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = meetDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Today ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hrs ${mins} Min`;
}, 1000);

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
  setInterval(() => {
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height / 2,
        r: Math.random() * 3 + 1,
        dx: Math.random() * 4 - 2,
        dy: Math.random() * 4 - 2,
        life: 60
      });
    }
  }, 800);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) particles.splice(index, 1);
  });

  requestAnimationFrame(animate);
}
animate();
/* Secret Unlock */
function unlockSecret() {
  const input = document.getElementById("secretInput").value.toLowerCase();
  const secret = "pattu"; // 🔑 SECRET PASSWORD

  if (input === secret) {
    document.getElementById("secretMessage").classList.remove("hidden");
  } else {
    alert("Not this one bebe 😌 try again ❤️");
  }
}

