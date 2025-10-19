// Tạo trái tim bay ngẫu nhiên
const container = document.getElementById("particles");
const colors = ["#ff2e6a", "#ff6b9a", "#ffc2d1", "#ff8fab", "#f72585"];

function spawnHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  const size = 10 + Math.random() * 18; // 10-28px
  h.style.width = h.style.height = size + "px";
  h.style.left = Math.random() * 100 + "vw";
  h.style.bottom = "-30px";
  h.style.background = colors[Math.floor(Math.random() * colors.length)];
  h.style.animationDuration = 6 + Math.random() * 6 + "s";
  h.style.animationDelay = Math.random() * 1 + "s";
  h.style.filter = `blur(${Math.random() * 0.5}px)`;
  container.appendChild(h);
  setTimeout(() => h.remove(), 14000);
}

// Nhịp tim tạo hạt
setInterval(spawnHeart, 220);
for (let i = 0; i < 20; i++) setTimeout(spawnHeart, i * 80); // preload một ít
