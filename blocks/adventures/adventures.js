import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.className = 'adventure-item';
    row.firstElementChild.className = 'adventure-image-card';
    row.firstElementChild.append(row.children[2]);
    row.querySelectorAll('picture > img').forEach((img) => {
      const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
      moveInstrumentation(img, optimizedPic.querySelector('img'));
      optimizedPic.querySelector('img').className = 'adventure-item-image';
      img.closest('picture').replaceWith(optimizedPic);
    });
  });
}

