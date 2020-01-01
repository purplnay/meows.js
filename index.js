const chars = [' ', 'ñ', 'ç', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const meows = [
  'meow', 'miau', 'miaou', 'meeowww', 'meeeeooow', 'mmeeeoow', 'meeow', 'meowwwwww', 'meeooooooooow', 'meowww', 'meeoww', 'meeooow', 'meeowwww',
  'meeeooooww', 'meeeooowwww', 'meeoooooww', 'meeeeowwww', 'meeeeeeoooow', 'meeeeow', 'meeeoooww', 'meeeeeowwww', 'meeeoooow', 'meeeooowwwww', 'meeoooowwww',
  'meeeooowww', 'meeeeoww', 'meeooowwww', 'meeeooww', 'meeeoowww'
];

const getChar = meow => {
  const index = meows.indexOf(meow.toLowerCase());

  if (index !== -1) {
    const char = chars[index];

    if (/^M/.test(meow)) {
      return char.toUpperCase();
    }

    return char;
  }

  return meow;
};

const getMeow = char => {
  const index = chars.indexOf(char.toLowerCase());

  if (index !== -1) {
    const meow = meows[index];

    if (/^[A-Z]/.test(char)) {
      return `M${meow.substr(1)}`;
    }

    return meow;
  }

  return char;
};

/**
 * Meowwwwww meeeeowwww mmeeeoow meeeeeowwww meeeooww meeeeow meeeooowwwww meow meeeooowwwww meowwwwww meeooowwww meeeooowwwww meow meeeooowwwww meeeeeeoooow meow meeoooooww meowwwwww meeeeeeoooow meeeeoww meeeoooow
 * 
 * @param {string} data Meeeooowwwww meeoww meowwwwww meow meeeooowwwww meowwwwww meeooowwww meeeooowwwww meow meeeooowwwww meeeeeeoooow meow meowwwwww meeeeowwww mmeeeoow meeeeeowwww meeeooww meeeeow meeeooowwwww
 * @return {string}
 */
const encrypt = data => {
  return data.normalize('NFD').replace(/[\u0300-\u036f]/g, '').split('').map(character => {
    return getMeow(character);
  }).join(' ');
};

/**
 * Meeow meowwwwww mmeeeoow meeeeeowwww meeeooww meeeeow meeeooowwwww meow meeeooowwwww meowwwwww meeooowwww meeeooowwwww meow meeooooooooow meeeeeowwww meeeeeeoooow meeoooooww meow meeoooooww meowwwwww meeeeeeoooow meeeeoww meeeoooow
 * 
 * @param {string} data Meeoooooww meowwwwww meeeeeeoooow meeeeoww meeeoooow meow meeeooowwwww meeeeeeoooow meow meeow meowwwwww mmeeeoow meeeeeowwww meeeooww meeeeow meeeooowwwww
 * @return {string}
 */
const decrypt = data => {
  return data.split(' ').map(meow => {
    return getChar(meow);
  }).join('');
};

if (typeof window !== 'undefined') {
  window.meows = { encrypt, decrypt };
} else {
  module.exports = { encrypt, decrypt };
}
