const palindromes = function (string) {
    const cleanStr = string.toLowerCase().replace(/[\W_]/g, '');
    return cleanStr === cleanStr.split('').reverse().join('');
  };

// Do not edit below this line
module.exports = palindromes;
