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
  { url: "fotos/sp-01.jpeg", caption: "011 — Cidade de Pedra & Noite" },
  { url: "fotos/sp-02.jpeg", caption: "011 — Arquitetura Noturna" },
  { url: "fotos/sp-03.jpeg", caption: "011 — Luzes Urbanas SP" }
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
 
