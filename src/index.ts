let svg = document.querySelector('svg');

let rects = svg?.querySelectorAll('g g ');
console.log(rects[0]?.querySelectorAll('rect'));

// data-level="0" --> no Highlight
let o = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];
