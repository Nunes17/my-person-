// Efeito de Texto Digitado no Terminal
const textToType = “Por trás de cada pessoa existe um universo que não aparece na superfície. Este é um pouco do MEU..”;
let index = 0;

function typeWriter() {
  if (index < textToType.length) {
    document.getElementById("typed-text").innerHTML += textToType.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // Velocidade da digitação
  }
}

window.onload = typeWriter;

// Função para Trocar de Aba
function switchTab(tabId, element) {
  // Esconde todos os conteúdos
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Remove estado ativo dos botões
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Ativa a aba e o botão selecionados
  document.getElementById(tabId).classList.add('active');
  element.classList.add('active');
}

// Lógica do Slide de Fotos
const photos = [
  { url: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=600", caption: "011 — Cidade de Pedra & Noite" },
  { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600", caption: "011 — Luzes & Referências Urbanas" },
  { url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600", caption: "011 — Arquitetura Noturna" }
];

let currentSlide = 0;

function updateSlide() {
  const imgElement = document.getElementById("img-target");
  const captionElement = document.getElementById("caption-target");
  
  if (imgElement && captionElement) {
    imgElement.src = photos[currentSlide].url;
    captionElement.innerText = photos[currentSlide].caption;
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
