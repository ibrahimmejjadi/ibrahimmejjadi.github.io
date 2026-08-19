const canvas = document.getElementById('grid_canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: null, y: null };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const SPACING = 40;
const EFFECT_RADIUS = 150;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw vertical lines
  for (let x = 0; x <= canvas.width; x += SPACING) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);

    let opacity = 0.04;
    if (mouse.x !== null) {
      let dist = Math.abs(mouse.x - x);
      if (dist < EFFECT_RADIUS) {
        opacity = 0.04 + (1 - dist / EFFECT_RADIUS) * 0.25;
      }
    }

    ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Draw horizontal lines
  for (let y = 0; y <= canvas.height; y += SPACING) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);

    let opacity = 0.04;
    if (mouse.x !== null) {
      let dist = Math.abs(mouse.y - y);
      if (dist < EFFECT_RADIUS) {
        opacity = 0.04 + (1 - dist / EFFECT_RADIUS) * 0.25;
      }
    }

    ctx.strokeStyle = `rgba(201, 168, 76, ${opacity})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();

const links = document.querySelectorAll(".nav_link");
const sections = {
  "HOME": document.querySelector(".Hero"),
  "PROJECTS": document.querySelector(".Projects"),
  "SKILLS": document.querySelector(".Skills"),
  "CERTIFICATES": document.querySelector(".Certificates"),
  "CONTACT": document.querySelector(".Contact")
};

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = sections[link.textContent];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});