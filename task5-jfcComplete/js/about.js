const buttons = document.querySelectorAll('.main__buttons__section-selector');
const sections = Array.from(
  document.querySelector('.main__sections').children
).filter(e => e.classList.contains('sections'));

buttons.forEach(e =>
  e.addEventListener('click', function () {
    sections.forEach(e => e.classList.add('remove'));
    sections.at(+this.dataset.show - 1).classList.remove('remove');
  })
);
