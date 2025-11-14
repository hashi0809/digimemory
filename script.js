/* =============== LIGHTBOX ===============*/
function openLightboxVideo(id) {
  const video = document.getElementById(id);
  document.getElementById("lightbox-video").src = video.src;
  document.getElementById("lightbox").style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

/* =============== METEORS ===============*/
function spawnMeteor() {
  const m = document.createElement("div");
  m.classList.add("meteor");

  const isLarge = Math.random() < 0.35; // 35% meteor lớn
  m.classList.add(isLarge ? "large" : "small");

  m.style.left = Math.random() * window.innerWidth + "px";
  m.style.top = "-150px";
  m.style.animationDuration = 0.6 + Math.random() * 0.8 + "s";

  document.getElementById("meteors").appendChild(m);
  setTimeout(() => m.remove(), 1500);
}

setInterval(spawnMeteor, 450);

/* =============== MUSIC & PORTAL ===============*/
let musicStarted = false;

document.getElementById("gateway").addEventListener("click", () => {
  document.getElementById("gateway").classList.add("hidden");

  if (!musicStarted) {
    document.getElementById("bgm").play();
    musicStarted = true;
  }
});

/* =============== TYPEWRITER AUTO START AFTER PORTAL ===============*/
setTimeout(() => {
  document.getElementById("mainTitle").classList.add("typewriter");
}, 2000);
