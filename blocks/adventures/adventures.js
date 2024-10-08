
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.className = 'adventure-item';
    row.firstElementChild.className = 'adventure-image-card';
    row.children[2].className = 'adventure-item-price';
    row.firstElementChild.append(row.children[2]);
    row.children[1].className = 'adventure-item-title';
    row.firstElementChild.querySelectorAll('img').forEach((img) => {
      img.className = 'adventure-item-image';
    });
  });
}

