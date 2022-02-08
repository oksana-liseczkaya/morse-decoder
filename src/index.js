const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let array = [];
  for (let j = 0; j < expr.length; j += 10) {
    array.push(expr.slice(j, j + 10));
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '0000001011') {
      array[i] = 'a';
    } else if (array[i] === '0011101010') {
      array[i] = 'b';
    } else if (array[i] === '0011101110') {
      array[i] = 'c';
    } else if (array[i] === '0000111010') {
      array[i] = 'd';
    } else if (array[i] === '0000000010') {
      array[i] = 'e';
    } else if (array[i] === '0010101110') {
      array[i] = 'f';
    } else if (array[i] === '0000111110') {
      array[i] = 'g';
    } else if (array[i] === '0010101010') {
      array[i] = 'h';
    } else if (array[i] === '0000001010') {
      array[i] = 'i';
    } else if (array[i] === '0010111111') {
      array[i] = 'j';
    } else if (array[i] === '0000111011') {
      array[i] = 'k';
    } else if (array[i] === '0010111010') {
      array[i] = 'l';
    } else if (array[i] === '0000001111') {
      array[i] = 'm';
    } else if (array[i] === '0000001110') {
      array[i] = 'n';
    } else if (array[i] === '0000111111') {
      array[i] = 'o';
    } else if (array[i] === '0010111110') {
      array[i] = 'p';
    } else if (array[i] === '0011111011') {
      array[i] = 'q';
    } else if (array[i] === '0000101110') {
      array[i] = 'r';
    } else if (array[i] === '0000101010') {
      array[i] = 's';
    } else if (array[i] === '0000000011') {
      array[i] = 't';
    } else if (array[i] === '0000101011') {
      array[i] = 'u';
    } else if (array[i] === '0010101011') {
      array[i] = 'v';
    } else if (array[i] === '0000101111') {
      array[i] = 'w';
    } else if (array[i] === '0011101011') {
      array[i] = 'x';
    } else if (array[i] === '0011101111') {
      array[i] = 'y';
    } else if (array[i] === '0011111010') {
      array[i] = 'z';
    } else if (array[i] === '1011111111') {
      array[i] = '1';
    } else if (array[i] === '1010111111') {
      array[i] = '2';
    } else if (array[i] === '1010101111') {
      array[i] = '3';
    } else if (array[i] === '1010101011') {
      array[i] = '4';
    } else if (array[i] === '1010101010') {
      array[i] = '5';
    } else if (array[i] === '1110101010') {
      array[i] = '6';
    } else if (array[i] === '1111101010') {
      array[i] = '7';
    } else if (array[i] === '1111111010') {
      array[i] = '8';
    } else if (array[i] === '1111111110') {
      array[i] = '9';
    } else if (array[i] === '1111111111') {
      array[i] = '0';
    } else if (array[i] === '**********') {
      array[i] = ' ';
    }
  }
  return array.join('');
}

module.exports = {
    decode
}