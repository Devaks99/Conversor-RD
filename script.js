const COTACAO_DOLAR = 5.74;

function conversor() {
    document.getElementById('conversorModal').style.display = 'block';
}

function openModal() {
  const modal = document.getElementById('conversorModal');
  modal.style.display = 'block';
  document.getElementById('valorInput').value = '';
  document.getElementById('resultado').textContent = '$ 0,00';
}

function closeModal() {
  document.getElementById('conversorModal').style.display = 'none';
}

function converterValor() {
    const input = document.getElementById('valorInput');
    const resultado = document.getElementById('resultado');
    const error = document.querySelector('.error-message');
 // Resetar mensagens
 error.style.display = 'none';
 resultado.textContent = '';

 // Validar entrada
 if (!input.value || isNaN(input.value)) {
   error.style.display = 'block';
   return;
 }

 // Calcular e formatar
 const valorDolar = (parseFloat(input.value) / COTACAO_DOLAR).toLocaleString('pt-BR', {
   style: 'currency',
   currency: 'USD',
   minimumFractionDigits: 2
 });

 resultado.textContent = `Valor em dólares: ${valorDolar}`;
}


// Fechar modal ao clicar fora ou no X
document.querySelector('.close').onclick = () => {
    document.getElementById('conversorModal').style.display = 'none';
}

window.onclick = (event) => {
    if (event.target.id === 'conversorModal') {
      document.getElementById('conversorModal').style.display = 'none';
    }
  }
  
// Fechar com ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});