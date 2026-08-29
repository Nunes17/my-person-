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

// Inicia a digitação e a voz grave de entrada
window.onload = () => {
  typeWriter();
  speakText(textToType);
};

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

// FUNÇÃO DE VOZ ESTILO BATMAN (GRAVE, PULLDOWN & PAUSADA)
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Para falas anteriores
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    
    // Configurações para efeito de voz do Batman:
    utterance.pitch = 0.5; // Tom ultra grave (pesado)
    utterance.rate = 0.8;  // Velocidade lenta e firme

    // Tenta selecionar uma voz masculina do sistema
    const voices = window.speechSynthesis.getVoices();
    const maleVoice = voices.find(voice => 
      voice.lang.includes('pt') && 
      (voice.name.toLowerCase().includes('male') || 
       voice.name.toLowerCase().includes('ricardo') || 
       voice.name.toLowerCase().includes('daniel') ||
       voice.name.toLowerCase().includes('homem'))
    );

    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    window.speechSynthesis.speak(utterance);
  }
}

function speakVerse() {
  speakText("O Senhor é a minha luz e a minha salvação; de quem terei medo?");
}

// Garantir que as vozes do sistema sejam carregadas antes do clique
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
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
