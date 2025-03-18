// Récupérer le bouton et le message
const button = document.getElementById('clickMe');
const message = document.getElementById('message');

// Ajouter un événement au bouton
button.addEventListener('click', () => {
  message.textContent = 'Vous avez cliqué sur le bouton ! 🎉';
});