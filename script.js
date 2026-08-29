// Abrir e fechar janelas do Desktop
function openWindow(id) {
  // Esconde todas as janelas abertas
  const allWindows = document.querySelectorAll('.content-box');
  allWindows.forEach(win => win.style.display = 'none');

  // Abre a janela clicada
  const targetWin = document.getElementById(id);
  if (targetWin) {
    targetWin.style.display = "block";
  }
}

function closeWindow(id) {
  const targetWin = document.getElementById(id);
  if (targetWin) {
    targetWin.style.display = "none";
  }
}

// Slide da Galeria de Fotos
const photos = [
  { url: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=600", caption: "011 — Cidade de Pedra & Noite" },
  { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600", caption: "011 — Arquitetura Noturna" },
  { url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600", caption: "011 — Luzes Urbanas SP" }
];

let currentSlide = 0;

function updateSlide() {
  document.getElementById("img-target").src = photos[currentSlide].url;
  document.getElementById("caption-target").innerText = photos[currentSlide].caption;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % photos.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + photos.length) % photos.length;
  updateSlide();
}
