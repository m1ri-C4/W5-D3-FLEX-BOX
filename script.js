const apriContatti = document.querySelector('#apri-contatti');
const chiudiContatti = document.querySelector('#chiudi-contatti');
const overlayContatti = document.querySelector('#overlay-contatti');

apriContatti.addEventListener('click', (e) => {
  e.preventDefault();
  overlayContatti.removeAttribute('hidden');
});

chiudiContatti.addEventListener('click', (e) => {
  e.preventDefault();
  overlayContatti.setAttribute('hidden', '');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();
    overlayContatti.setAttribute('hidden', '');
  }
});