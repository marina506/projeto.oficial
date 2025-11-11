// script.js - Funcionalidades para a página de serviços
document.addEventListener('DOMContentLoaded', function() {
  // Botão de adicionais
  const btnAdicionais = document.getElementById('btn-adicionais');
  const adicionaisInfo = document.getElementById('adicionais-info');
  
  if (btnAdicionais && adicionaisInfo) {
    btnAdicionais.addEventListener('click', function() {
      if (adicionaisInfo.classList.contains('hidden')) {
        adicionaisInfo.classList.remove('hidden');
        btnAdicionais.textContent = 'Ocultar Adicionais';
      } else {
        adicionaisInfo.classList.add('hidden');
        btnAdicionais.textContent = 'Adicionais';
      }
    });
  }
  
  // Navegação entre páginas
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('ativo');
    } else {
      link.classList.remove('ativo');
    }
  });
});