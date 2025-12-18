/* Typing effect */
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

/* Gift open */
function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.getElementById("surprise").classList.remove("hidden");
  document.body.classList.add("after-gift");

  startFireworks();
  heartBurst();   // ❤️ add this line
}



/* Countdown */
const meetDate = new Date("April 2, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = meetDate - now;

  if (diff <= 0) {
    document.getElementById("timer").innerHTML = "Today ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Days ${hrs} Hrs ${mins} Min`;
}, 1000);

/* Secret unlock */
function unlockSecret() {
  const input = document.getElementById("secretInput").value.toLowerCase();
  const secret = "pattu";

  if (input === secret) {
    document.getElementById("secretMessage").classList.remove("hidden");
  } else {
    alert("Not this one bebe 😌 try again ❤️");
  }
}

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

function heartBurst() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }
}

