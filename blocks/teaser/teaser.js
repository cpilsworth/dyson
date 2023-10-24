import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  let image = block.querySelector(':scope > div > div:first-child');
  image.className = 'teaser-image';
  let content = block.querySelector(':scope > div > div:nth-child(2)');
  content.className = 'teaser-content';
}
