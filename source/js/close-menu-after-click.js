let header = document.querySelector('[data-validate="header"]');
let wrapper = document.querySelector('[data-validate="wrapper"]');
const headerLinks = document.querySelectorAll('[data-validate="header__link"]');
const html = document.querySelector('[data-validate="html"]');

export function closeMenuAfterClick() {

  if (!header || !wrapper) {
    return;
  }

  header.classList.add('is-closed');
  header.classList.remove('is-opened');
  wrapper.classList.remove('is-bg');
  html.classList.remove('scroll-lock');
}

headerLinks.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

function handleLinkClick(e) {
  e.preventDefault();

  closeMenuAfterClick();
  let link = e.currentTarget;
  let href = link.getAttribute('href');

  location.href = href;
}
