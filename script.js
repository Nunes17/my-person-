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

// Inicia a digitação e a voz narradora de entrada
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

}

function closePages() {
  const pages = document.querySelectorAll('.full-page');
  pages.forEach(p => p.style.display = 'none');

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// Função de Narração por Voz
function speakText(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

function speakVerse() {
  speakText("O Senhor é a minha luz e a minha salvação; de quem terei medo?");
}

// Controle de Fotos SP Gallery
// TROQUE os caminhos abaixo pelos nomes reais das suas fotos na pasta "fotos/"
const photos = [
  { url: "sp1.jpeg", caption: "011 — SP 01" },
  { url: "sp2.jpeg", caption: "011 — SP 02" },
  { url: "sp3.jpeg", caption: "011 — SP 03" },
  { url: "sp4.jpeg", caption: "011 — SP 04" },
  { url: "sp5.jpeg", caption: "011 — SP 05" },
  { url: "sp6.jpeg", caption: "011 — SP 06" },
  { url: "sp7.jpeg", caption: "011 — SP 07" },
  { url: "sp8.jpeg", caption: "011 — SP 08" },
  { url: "sp9.jpeg", caption: "011 — SP 09" },
  { url: "sp10.jpeg", caption: "011 — SP 10" },
  { url: "sp11.jpeg", caption: "011 — SP 11" },
  { url: "sp12.jpeg", caption: "011 — SP 12" }
];

let currentSlide = 0;

// Troca a foto da galeria com efeito de glitch (separação RGB + scan-line)
function updateSlide() {
  const frame = document.getElementById("photo-frame");
  const img = document.getElementById("img-target");
  const newPhoto = photos[currentSlide];

  // define a imagem que vai "vazar" nas camadas vermelha/ciano durante o glitch
  frame.style.setProperty('--photo-url', `url('${newPhoto.url}')`);
  frame.classList.add('glitching');

  // troca a imagem real no meio do efeito, pra não aparecer o "salto"
  setTimeout(() => {
    img.src = newPhoto.url;
    document.getElementById("caption-target").innerText = newPhoto.caption;
  }, 150);

  // remove a classe de animação quando o efeito termina
  setTimeout(() => {
    frame.classList.remove('glitching');
  }, 400);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % photos.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + photos.length) % photos.length;
  updateSlide();
}

// MAPA INTERATIVO: dá um "zoom" na direção do card quando o mouse passa por cima
const cityMap = document.getElementById('city-map');
const allCards = document.querySelectorAll('.agent-card');

allCards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => {
    cityMap.classList.add('zoomed', `zoom-${i + 1}`);
  });
  card.addEventListener('mouseleave', () => {
    cityMap.classList.remove('zoomed', `zoom-${i + 1}`);
  });
});
