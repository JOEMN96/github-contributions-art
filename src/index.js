let svg = document.querySelector('svg');
let rects = svg.querySelectorAll('g');
// data-level="0" --> no Highlight
var o = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

console.log(rects);

for (let i = 0; i < rects.length; i++) {
  console.log(rects[i]);
  // for (let j = 0; j < o.length; j++) {
  //   console.log(rects[i]);
  // }
}
