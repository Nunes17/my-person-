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

// Lista expandida para 10 fotos da Galeria SP (pasta "imagens")
const photos = [
  { url: "imagens/sp1.jpg", caption: "777 — Mood" },
  { url: "imagens/sp2.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp3.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp4.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp5.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp6.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp7.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp8.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp9.jpg", caption: "777 —  Mood" },
  { url: "imagens/sp10.jpg", caption: "777 —  Mood" }
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
