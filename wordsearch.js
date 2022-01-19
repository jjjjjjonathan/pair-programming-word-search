const wordSearch = (letters, word) => {
  return horizontalCheck(letters, word) || verticalCheck(letters, word);
};

const horizontalCheck = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  // const verticalJoin = verticalArray(letters).map(ls => ls.join(''));
  for (let wordToFind of horizontalJoin) {
    if (wordToFind.includes(word)) {
      return true;
    }
  }
  return false;
};

const verticalCheck = (letters, word) => {
  const verticalJoin = verticalArray(letters).map(ls => ls.join(''));
  // const verticalJoin = verticalArray(letters).map(ls => ls.join(''));
  for (let wordToFind of verticalJoin) {
    if (wordToFind.includes(word)) {
      return true;
    }
  }
  return false;
};

const verticalArray = function(letters) {
  
  let array = [];
  const rows = letters[0].length;
  const columns = letters.length;

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let x = 0; x < columns; x++) {
      newRow.push(letters[x][i]);
    }
    array.push(newRow);
  }
  return array;
};

module.exports = wordSearch;