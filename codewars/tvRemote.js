/**
 * https://www.codewars.com/kata/5a5032f4fd56cb958e00007a/train/javascript
Background
My TV remote control has arrow buttons and an OK button.

I can use these to move a "cursor" on a logical screen keyboard to type "words"...

The screen "keyboard" layout looks like this

a	b	c	d	e	1	2	3
f	g	h	i	j	4	5	6
k	l	m	n	o	7	8	9
p	q	r	s	t	.	@	0
u	v	w	x	y	z	_	/
Kata task
How many button presses on my remote are required to type a given word?

Notes
The cursor always starts on the letter a (top left)
Remember to also press OK to "accept" each character.
Take a direct route from one character to the next
The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
Example
word = codewars

c => a-b-c-OK = 3
o => c-d-e-j-o-OK = 5
d => o-j-e-d-OK = 4
e => d-e-OK = 2
w => e-j-o-t-y-x-w-OK = 7
a => w-r-m-h-c-b-a-OK = 7
r => a-f-k-p-q-r-OK = 6
s => r-s-OK = 2
Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36
 */
var tvRemote = function (word) {
  // function tvRemote(word) {

  let remote = new Map();
  remote.set('a', [0, 0]);
  remote.set('b', [1, 0]);
  remote.set('c', [2, 0]);
  remote.set('d', [3, 0]);
  remote.set('e', [4, 0]);
  remote.set('1', [5, 0]);
  remote.set('2', [6, 0]);
  remote.set('3', [7, 0]);

  remote.set('f', [0, 1]);
  remote.set('g', [1, 1]);
  remote.set('h', [2, 1]);
  remote.set('i', [3, 1]);
  remote.set('j', [4, 1]);
  remote.set('4', [5, 1]);
  remote.set('5', [6, 1]);
  remote.set('6', [7, 1]);

  remote.set('k', [0, 2]);
  remote.set('l', [1, 2]);
  remote.set('m', [2, 2]);
  remote.set('n', [3, 2]);
  remote.set('o', [4, 2]);
  remote.set('7', [5, 2]);
  remote.set('8', [6, 2]);
  remote.set('9', [7, 2]);

  remote.set('p', [0, 3]);
  remote.set('q', [1, 3]);
  remote.set('r', [2, 3]);
  remote.set('s', [3, 3]);
  remote.set('t', [4, 3]);
  remote.set('.', [5, 3]);
  remote.set('@', [6, 3]);
  remote.set('0', [7, 3]);

  remote.set('u', [0, 4]);
  remote.set('v', [1, 4]);
  remote.set('w', [2, 4]);
  remote.set('x', [3, 4]);
  remote.set('y', [4, 4]);
  remote.set('z', [5, 4]);
  remote.set('_', [6, 4]);
  remote.set('/', [7, 4]);

  // need to add an additional <OK> press to the counter for each letter
  let count = 0 + word.length;
  // loop through chars in word
  const wordArr = word.split('');
  let currentPosition = [0, 0];

  wordArr.forEach(el => {
    const found = remote.get(el);
    if (found == undefined) {
      throw new Error('Character {' + el + '} not found');
    }
    const hDiff = Math.abs(found[0] - currentPosition[0]);
    const vDiff = Math.abs(found[1] - currentPosition[1]);

    count += hDiff + vDiff;
    currentPosition = found;

  });
  return count;
}

var tvRemoteCAVersion = function (word) {
  const matrix = [['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
  ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
  ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
  ['p', 'q', 'r', 's', 't', '.', '@', '0'],
  ['u', 'v', 'w', 'x', 'y', 'z', '_', '/'],
  ];
  let newMatrix = [];
  let coord = [[0, 0]];
  let counter = 0;
  matrix.forEach(el => {
    newMatrix.push(el.join(''));
  });
  const arrWord = word.split('');
  arrWord.forEach(el => {
    for (let i = 0; i < newMatrix.length; i++) {
      if (newMatrix[i].includes(el)) {
        let coordY = newMatrix[i].indexOf(el);
        let coordX = i;
        coord.push([coordX, coordY]);
      }
    }
  });
  for (let i = 0; i < coord.length - 1; i++) {
    counter += Math.abs(coord[i][1] - coord[i + 1][1]) + 1 + Math.abs(coord[i][0] - coord[i + 1][0]);
  }
  return counter;
}


module.exports = {
  tvRemote,
  tvRemoteCAVersion
};