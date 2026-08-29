// Digitação do texto inicial bloqueante
const textToType = "Por trás de cada pessoa existe um universo que não aparece na superfície. Este é um pouco do MEU..";
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    document.getElementById("typed-text").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  } else {
    document.getElementById("close-intro-btn").style.display = "inline-block";
  }
}

window.onload = typeWriter;

// Fechar tela de introdução
function closeIntro() {
  document.getElementById("intro-overlay").style.display = "none";
}

// Abrir e fechar janelas do Desktop
function openWindow(id) {
  // Esconde todas para manter organizado
  const allWindows = document.querySelectorAll('.content-box');
  allWindows.forEach(win => win.style.display = 'none');

  // Exibe apenas a janela clicada
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
