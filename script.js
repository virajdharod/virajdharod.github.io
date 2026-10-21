const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

// About-page portrait: use self.png if present, then self.jpg.
const portrait = document.getElementById('profile-image');
if (portrait) {
  let triedJpg = false;
  portrait.addEventListener('error', () => {
    if (!triedJpg) {
      triedJpg = true;
      portrait.src = 'self.jpg';
    } else {
      portrait.closest('.portrait-frame')?.classList.add('image-missing');
    }
  });
}
