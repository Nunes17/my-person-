// Texto de Introdução digitado na tela
const textToType = "Por trás de cada pessoa existe um universo que não aparece na superfície. Este é um pouco do MEU..";
let index = 0;

function typeWriter() {
  const typedTarget = document.getElementById("typed-text");
  const btnTarget = document.getElementById("close-intro-btn");

  if (typedTarget && index < textToType.length) {
    typedTarget.innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  } else if (btnTarget) {
    btnTarget.style.display = "inline-block";
  }
}

// Inicia a digitação ao carregar a página
window.onload = () => {
  typeWriter();
};

// Fechar a tela de introdução
function closeIntro() {
  const overlay = document.getElementById("intro-overlay");
  if (overlay) {
    overlay.style.display = "none";
  }
}

// Controle de abertura de páginas
function openPage(pageId) {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }
}

function closePages() {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');
}

// Galeria SP — 10 Fotos
const photos = [
  { url: "imagens/sp1.jpg", caption: "011 — Noite & Rotina Urbana" },
  { url: "imagens/sp2.jpg", caption: "011 — Arquitetura Noturna" },
  { url: "imagens/sp3.jpg", caption: "011 — Perspectiva SP" },
  { url: "imagens/sp4.jpg", caption: "011 — Luzes & Asfalto" },
  { url: "imagens/sp5.jpg", caption: "011 — Essência da Cidade" },
  { url: "imagens/sp6.jpg", caption: "011 — Concreto & Movimento" },
  { url: "imagens/sp7.jpg", caption: "011 — Visual Noturno" },
  { url: "imagens/sp8.jpg", caption: "011 — Geometria Urbana" },
  { url: "imagens/sp9.jpg", caption: "011 — São Paulo Mood" },
  { url: "imagens/sp10.jpg", caption: "011 — Visão de Gotham" }
];

let currentSlide = 0;

function updateSlide() {
  const imgElem = document.getElementById("img-target");
  const capElem = document.getElementById("caption-target");

  if (imgElem && capElem) {
    imgElem.src = photos[currentSlide].url;
    capElem.innerText = photos[currentSlide].caption;
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % photos.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + photos.length) % photos.length;
  updateSlide();
}
