let header = document.querySelector('[data-validate="header"]');
let wrapper = document.querySelector('[data-validate="wrapper"]');
const headerLinks = document.querySelectorAll('[data-validate="header__link"]');

export function closeMenuAfterClick() {

  header.classList.add('is-closed');
  header.classList.remove('is-opened');
  wrapper.classList.remove('is-bg');

}

headerLinks.forEach((link) => {
  link.addEventListener('click', handleLinkClick);
});

function handleLinkClick(e) {
  e.preventDefault();

  closeMenuAfterClick();
  let link = e.currentTarget;
  let href = link.getAttribute('href');

  // переход по ссылке
  location.href = href;
}
