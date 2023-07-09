const transpose = function(matrix) {
  let newArray = [];
  for (let x = 0; x < matrix[0].length; x++) {
    let nestedArr = [];
    for (let val of matrix) {
      nestedArr.push(val[x]);
    }
    newArray.push(nestedArr);
  }
  return newArray;
};



const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      letters = transpose(letters);
      const Array = letters.map(ls => ls.join(''));
      for (let i of Array) {
        if (i.includes(word)) {
          return true;
        }
      }
    }

  }
  return false;
};

module.exports = wordSearch;