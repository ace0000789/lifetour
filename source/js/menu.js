export function initHeaderToggle() {

  let header = document.querySelector('[data-validate="header"]');
  let headerToggle = document.querySelector('[data-validate="toggle"]');

  // header.removeAttribute('class');  убрать класс вместо remove

  headerToggle.addEventListener('click', toggleHeader);

  function toggleHeader() {
    if (header.classList.contains('is--closed')) {
      header.classList.remove('is--closed');
      header.classList.add('is--opened');
    } else {
      header.classList.add('is--closed');
      header.classList.remove('is--opened');
    }
  }
}
