let svg = document.querySelector('svg');
let rects = svg.querySelectorAll('g g');
// data-level="0" --> no Highlight
var o = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
];

o.forEach((item) => {
  item.forEach((val, index) => {
    for (let i = 0; i < rects.length; i++) {}
  });
});
