getKanye = async () => {
  const api_call = await fetch('https://api.kanye.rest');
  const data = await api_call.json();

  document.getElementById('displayKanye').textContent = data.quote;
}

window.addEventListener('load', getKanye);
document.getElementById('newKanye').addEventListener('click', getKanye);
