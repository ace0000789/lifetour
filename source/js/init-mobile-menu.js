export function initMobileMunu() {
  let header = document.querySelector('[data-validate="header"]');
  let headerToggle = document.querySelector('[data-validate="toggle"]');
  let wrapper = document.querySelector('[data-validate="wrapper"]');

  if (!header || !headerToggle || !wrapper) {
    return;
  }

  header.classList.remove('is-nojs');

  headerToggle.addEventListener('click', toggleHeader);

  function toggleHeader() {
    if (header.classList.contains('is-closed')) {
      header.classList.remove('is-closed');
      header.classList.add('is-opened');
      wrapper.classList.add('is-bg');
    } else {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      wrapper.classList.remove('is-bg');
    }
  }
}
