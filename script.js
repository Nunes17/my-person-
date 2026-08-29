// Função para abrir qualquer janela pelo ID
function openWindow(id) {
  const windowElement = document.getElementById(id);
  if (windowElement) {
    windowElement.style.display = 'block';
  }
}

// Função para fechar qualquer janela pelo ID
function closeWindow(id) {
  const windowElement = document.getElementById(id);
  if (windowElement) {
    windowElement.style.display = 'none';
  }
}
