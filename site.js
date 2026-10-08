(() => {
  'use strict';
  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-youtube]');
    if (!button || !/^[A-Za-z0-9_-]{11}$/.test(button.dataset.youtube)) return;
    const player = document.createElement('iframe');
    player.title = button.dataset.title;
    player.src = 'https://www.youtube.com/embed/' + button.dataset.youtube + '?playsinline=1&rel=0&autoplay=1';
    player.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    button.parentElement.replaceChildren(player);
  });
  document.querySelectorAll('.youtube-preview img').forEach((image) => {
    image.addEventListener('error', () => {
      image.src = 'video-placeholder.svg';
    }, {once: true});
  });
})();
