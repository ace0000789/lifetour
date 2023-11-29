let header = document.querySelector('[data-validate="header"]');
let wrapper = document.querySelector('[data-validate="wrapper"]');
const html = document.querySelector('[data-validate="html"]');

export function checkScreenSize() {


  if (!header || !wrapper) {
    return;
  }
  function handleResize() {
    if (window.innerWidth > 1199) {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      wrapper.classList.remove('is-bg');
      html.classList.remove('scroll-lock');
    }
  }

  window.addEventListener('resize', handleResize);

  handleResize();
}
