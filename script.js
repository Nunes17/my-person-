// Abrir a página cheia do menu selecionado
function openPage(pageId) {
  // Esconde todas as páginas ativas
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  // Exibe a página escolhida
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }

  // Se a página aberta for a FAITH, dispara a narração em voz
  if (pageId === 'page-faith') {
    speakVerse();
  }
}

// Voltar para o menu principal de seleção
function closePages() {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  // Cancela qualquer narração de áudio que estiver rolando
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Narração em áudio para o Salmo 27:1
function speakVerse() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Para narrações anteriores
    const text = "O Senhor é a minha luz e a minha salvação; de quem terei medo?";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9; // Velocidade da fala um pouco mais firme e pausada
    window.speechSynthesis.speak(utterance);
  }
}

// Controle da Galeria de Fotos SP
const photos = [
  { url: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800", caption: "011 — Cidade de Pedra & Noite" },
  { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800", caption: "011 — Arquitetura Noturna" },
  { url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800", caption: "011 — Luzes Urbanas SP" }
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
