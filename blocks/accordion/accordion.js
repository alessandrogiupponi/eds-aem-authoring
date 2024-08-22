/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
  // decorate accordion item label
  const label = block.children[0];
  const summary = document.createElement('summary');
  summary.className = 'accordion-item-label';
  summary.append(...label.childNodes);
  // decorate accordion item body
  const body = block.children[1];
  body.className = 'accordion-item-body';
  // decorate accordion item
  const details = document.createElement('details');
  details.className = 'accordion-item';
  details.append(summary, body);
  block.replaceChildren(details);
}
