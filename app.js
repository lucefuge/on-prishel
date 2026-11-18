const filters = document.querySelector('.filters');
const groups = [...document.querySelectorAll('.group')];
const buttons = groups.map(group => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = group.querySelector('h3').textContent;
  button.setAttribute('aria-controls', group.id);
  button.addEventListener('click', () => selectGroup(group));
  filters.append(button);
  return button;
});

function selectGroup(active) {
  groups.forEach((group, index) => {
    group.hidden = group !== active;
    buttons[index].setAttribute('aria-pressed', String(group === active));
  });
}

selectGroup(groups[0]);
filters.hidden = false;
