const block1 = document.querySelector('.block-1');
const blockStyle = block1.style;
blockStyle.width = '200px';
block1.classList.add('red');
block1.classList.add('green');
block1.classList.remove('red');

console.log(block1.style);
console.log(block1.classList);
console.log(block1.classList.contains('red'));
block1.classList.toggle('red');
block1.classList.toggle('red');
