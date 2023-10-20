import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';

  hoistAnchor(block, ul);
  block.append(ul);
}

/*
  * Hoist the first anchor in the body to contain the whole card and wrap the original innerHTML 
  * in a paragraph element
  */
function hoistAnchor(block, ul) {
  if (!block.classList.contains('hoist')) return;
  ul.querySelectorAll('li .cards-card-body a').forEach((a) => {
    const li = a.closest('li');
    const p = document.createElement('p');
    p.className = 'cards-card-title';
    p.innerHTML = a.innerHTML;
    a.replaceWith(p);
    a.innerHTML = '';
    a.classList.remove('button');
    while(li.firstChild) {
      a.appendChild(li.firstChild);
    }
    li.appendChild(a);
  });
  return ul;
}
