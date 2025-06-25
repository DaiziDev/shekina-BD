

  // Customize your friend's name here
document.getElementById('name').innerText = 'Nyinang Grace Shekina Fortune La Diva';

const songs = [
  "image/audio/KS Bloom - Joyeux Anniversaire ( Clip Officiel ).mp3", 
  
  "image/audio/Les Rythmeurs ABC Célébration (Clip Officiel By Léo Vouk).mp3", 
  "image/audio/Shapat Ft. @minksofficiel5855  - Tous les jours (Clip officiel).mp3",
  "image/audio/download.mp4",
];
let currentIndex = 0;

const audio = document.getElementById("audio");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pauseBtn = document.getElementById("pauseBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");

// Load initial song
audio.src = songs[currentIndex];

window.onload = () => {
  audio.play()
}
audio.onloadedmetadata = () => {
  updateProgress();
};
audio.ontimeupdate = () => {
  updateProgress();
};
function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + "%";
}
// Next song
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % songs.length;
  audio.src = songs[currentIndex];
  audio.play();
};
// Previous song
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  audio.src = songs[currentIndex];
  audio.play();
};
// Pause / Play toggle
pauseBtn.onclick = () => {
  if (audio.paused) {
    audio.play();
    pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    pauseBtn.inner = '<i class="fa-solid fa-play"></i>';
  }
};


const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let confettiPieces = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Confetti {
  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight - window.innerHeight;
    this.size = Math.random() * 8 + 2;
    this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    this.speed = Math.random() * 4 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.rotationSpeed = Math.random() * 0.02 - 0.01;
    this.angleX = Math.random() * Math.PI * 2;
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angleX) * 2;
    this.angleX += this.rotationSpeed;

    if (this.y > window.innerHeight) {
      this.y = -this.size;
      this.x = Math.random() * window.innerWidth;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
    ctx.restore();
  }
}

for (let i = 0; i < 150; i++) {
  confettiPieces.push(new Confetti());
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confettiPieces.forEach(piece => {
    piece.update();
    piece.draw();
  });
  requestAnimationFrame(animate);
}
animate();

document.querySelectorAll('.lookBtn').forEach(button => {
  button.addEventListener('click', () => {
    toggleVideoEffect();
  });
});

function toggleVideoEffect() {
  const texts = document.querySelectorAll('.hideShow');
  const video = document.getElementById("videos");
  const lookBtn = document.getElementById("lookBtn")
  
  // Check if the first element is visible (assuming all share the same state)
  const isVisible = Array.from(texts).some(element => element.style.display !== 'none');

  if (isVisible) {
    // Hide all elements with class 'hideShow'
    texts.forEach(element => {
      element.style.display = 'none';
    });
    // Apply filter to video
    video.style.filter = 'blur(0px) brightness(1.1)';
    lookBtn.textContent = "Look Text"
  } else {
    // Show all elements with class 'hideShow'
    texts.forEach(element => {
      element.style.display = 'block'; // or '' to revert to default
    });
    // Apply filter to video
    video.style.filter = 'blur(5px) brightness(0.5)';
    lookBtn.textContent = "Look Video"
  }
}