// Frase de Introdução da Tela de Entrada
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

// Inicia a digitação ao carregar
window.onload = () => {
  typeWriter();
};

// Tenta tocar a narração no primeiro clique do usuário na tela (desbloqueia o áudio do navegador)
document.addEventListener('click', () => {
  // Ativa a síntese de voz após o clique do usuário
  if ('speechSynthesis' in window && !window.speechSynthesis.speaking) {
    // Pronto para liberar o áudio
  }
}, { once: true });

// Fechar tela de introdução
function closeIntro() {
  document.getElementById("intro-overlay").style.display = "none";
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Controle de abertura de páginas em tela cheia
function openPage(pageId) {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.style.display = 'block';
  }

  // Narração de voz na aba FAITH
  if (pageId === 'page-faith') {
    speakVerse();
  }
}

function closePages() {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// FUNÇÃO DE VOZ ROBÚSTA E DIRETA
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    console.log("Navegador não suporta voz.");
    return;
  }

  // Para qualquer fala anterior
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'pt-BR';
  utterance.pitch = 0.6; // Tom grave (estilo Batman)
  utterance.rate = 0.85; // Velocidade pausada e séria

  // Força a execução da fala
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 100);
}

// Narração da mensagem inicial da bio
function speakIntro() {
  speakText(textToType);
}

// Narração do Salmo
function speakVerse() {
  speakText("O Senhor é a minha luz e a minha salvação; de quem terei medo?");
}

// Controle de Fotos SP Gallery
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
